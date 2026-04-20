import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const hidePreload = () => {
  const preload = document.getElementById('preload');

  if (!preload) {
    return;
  }

  requestAnimationFrame(() => {
    preload.classList.add('loaded');
    setTimeout(() => preload.remove(), 500);
  });
};

bootstrapApplication(AppComponent, appConfig)
  .then(() => hidePreload())
  .catch((err) => {
    hidePreload();
    console.error(err);
  });
