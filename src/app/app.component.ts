import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'tibaaneli';
  isPreloadHidden = false;

  private hidePreloadTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private onWindowLoad = () => this.scheduleHidePreload();

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine'
    });
  }

  ngAfterViewInit() {
    if (document.readyState === 'complete') {
      this.scheduleHidePreload();
      return;
    }

    window.addEventListener('load', this.onWindowLoad, { once: true });

    // Never block the app forever when some resources are too slow.
    this.hidePreloadTimeoutId = setTimeout(() => this.hidePreload(), 8000);
  }

  ngOnDestroy() {
    window.removeEventListener('load', this.onWindowLoad);
    this.clearFallbackTimer();
  }

  private scheduleHidePreload() {
    setTimeout(() => this.hidePreload(), 400);
  }

  private hidePreload() {
    if (this.isPreloadHidden) {
      return;
    }

    this.isPreloadHidden = true;
    this.clearFallbackTimer();
    this.cdr.markForCheck();
  }

  private clearFallbackTimer() {
    if (this.hidePreloadTimeoutId !== null) {
      clearTimeout(this.hidePreloadTimeoutId);
      this.hidePreloadTimeoutId = null;
    }
  }
}
