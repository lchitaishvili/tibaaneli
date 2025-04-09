import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-container">
      <h1>Blog</h1>
      <div class="blog-content">
        <p>Read our latest articles and insights.</p>
        <!-- Add your blog posts here -->
      </div>
    </div>
  `,
  styles: [`
    .blog-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .blog-content {
      margin-top: 2rem;
    }
  `]
})
export class BlogComponent {}
