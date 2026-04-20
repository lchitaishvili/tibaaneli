#!/usr/bin/env node

import { mkdir, mkdtemp, readdir, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { promisify } from 'node:util';
import { execFile as execFileCallback } from 'node:child_process';

const execFile = promisify(execFileCallback);
const projectRoot = process.cwd();

const defaults = {
  input: 'src/assets/images',
  maxWidth: 1920,
  quality: 70,
  suffix: '.optimized',
  replace: false,
  dryRun: false,
  outputRoot: null,
};

function printHelp() {
  console.log(`Compress JPEG images with macOS sips.

Usage:
  npm run images:compress
  npm run images:compress -- --max-width=1600 --quality=65
  npm run images:compress -- --output-root=/tmp/tibaaneli-images
  npm run images:compress:replace -- --max-width=1920 --quality=70

Options:
  --input=<path>        Root directory to scan (default: ${defaults.input})
  --max-width=<pixels>  Resize images so the longest side is at most this value (default: ${defaults.maxWidth})
  --quality=<percent>   JPEG quality passed to sips formatOptions (default: ${defaults.quality})
  --suffix=<text>       Suffix for non-replaced files (default: ${defaults.suffix})
  --output-root=<path>  Mirror output into another directory instead of next to originals
  --replace             Replace originals in place
  --dry-run             Print planned work without writing files
  --help                Show this message
`);
}

function parseArgs(argv) {
  const options = { ...defaults };

  for (const arg of argv) {
    if (arg === '--help') {
      options.help = true;
      continue;
    }

    if (arg === '--replace') {
      options.replace = true;
      continue;
    }

    if (arg === '--dry-run') {
      options.dryRun = true;
      continue;
    }

    const [flag, value] = arg.split('=');

    switch (flag) {
      case '--input':
        options.input = value;
        break;
      case '--max-width':
        options.maxWidth = Number(value);
        break;
      case '--quality':
        options.quality = Number(value);
        break;
      case '--suffix':
        options.suffix = value;
        break;
      case '--output-root':
        options.outputRoot = value;
        break;
      default:
        throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (!Number.isFinite(options.maxWidth) || options.maxWidth <= 0) {
    throw new Error('`--max-width` must be a positive number.');
  }

  if (!Number.isFinite(options.quality) || options.quality < 1 || options.quality > 100) {
    throw new Error('`--quality` must be a number between 1 and 100.');
  }

  if (options.replace && options.outputRoot) {
    throw new Error('Use either `--replace` or `--output-root`, not both.');
  }

  return options;
}

async function collectJpegs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectJpegs(fullPath));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    const isJpeg = ext === '.jpg' || ext === '.jpeg';
    const isOptimizedCopy = entry.name.includes('.optimized.');

    if (isJpeg && !isOptimizedCopy) {
      files.push(fullPath);
    }
  }

  return files;
}

function getOutputPath(sourcePath, inputRoot, options) {
  if (options.replace) {
    return sourcePath;
  }

  const ext = path.extname(sourcePath);
  const basename = path.basename(sourcePath, ext);

  if (options.outputRoot) {
    const relativePath = path.relative(inputRoot, sourcePath);
    const outputDir = path.join(options.outputRoot, path.dirname(relativePath));
    return path.join(outputDir, `${basename}${options.suffix}${ext}`);
  }

  return path.join(path.dirname(sourcePath), `${basename}${options.suffix}${ext}`);
}

async function compressFile(sourcePath, inputRoot, options) {
  const outputPath = getOutputPath(sourcePath, inputRoot, options);
  const relativeSource = path.relative(projectRoot, sourcePath);
  const relativeOutput = path.relative(projectRoot, outputPath);

  if (options.dryRun) {
    console.log(`DRY RUN ${relativeSource} -> ${relativeOutput}`);
    return { sourceBytes: 0, outputBytes: 0, skipped: false };
  }

  await mkdir(path.dirname(outputPath), { recursive: true });

  let finalOutputPath = outputPath;
  let tempDir = null;

  if (options.replace) {
    tempDir = await mkdtemp(path.join(os.tmpdir(), 'tibaaneli-jpeg-'));
    finalOutputPath = path.join(tempDir, path.basename(sourcePath));
  }

  await execFile('sips', [
    '-s', 'format', 'jpeg',
    '-s', 'formatOptions', String(options.quality),
    '-Z', String(options.maxWidth),
    sourcePath,
    '--out', finalOutputPath,
  ]);

  const sourceStats = await stat(sourcePath);
  const outputStats = await stat(finalOutputPath);
  const optimizedIsSmaller = outputStats.size < sourceStats.size;

  if (!optimizedIsSmaller) {
    await rm(finalOutputPath, { force: true, recursive: true });

    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
    }

    console.log(`${relativeSource} -> kept original (${formatBytes(sourceStats.size)})`);

    return {
      sourceBytes: sourceStats.size,
      outputBytes: sourceStats.size,
      skipped: true,
    };
  }

  if (options.replace) {
    await rename(finalOutputPath, sourcePath);
    await rm(tempDir, { recursive: true, force: true });
  }

  const resultOutput = options.replace ? sourcePath : outputPath;
  console.log(`${relativeSource} -> ${path.relative(projectRoot, resultOutput)} (${formatBytes(sourceStats.size)} -> ${formatBytes(outputStats.size)})`);

  return {
    sourceBytes: sourceStats.size,
    outputBytes: outputStats.size,
    skipped: false,
  };
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    printHelp();
    return;
  }

  const inputRoot = path.resolve(projectRoot, options.input);
  const files = await collectJpegs(inputRoot);

  if (!files.length) {
    console.log(`No JPEG files found in ${path.relative(projectRoot, inputRoot) || '.'}.`);
    return;
  }

  console.log(`Compressing ${files.length} JPEG file(s) from ${path.relative(projectRoot, inputRoot)}...`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const result = await compressFile(file, inputRoot, options);
    totalBefore += result.sourceBytes;
    totalAfter += result.outputBytes;
  }

  if (!options.dryRun) {
    const saved = totalBefore - totalAfter;
    console.log(`Done. ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} (${saved >= 0 ? '-' : '+'}${formatBytes(Math.abs(saved))}).`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});


