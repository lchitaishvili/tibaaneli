import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {changeAttribute, changeClass, delay, getElement} from "./helpers";
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'tibaaneli';

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine'
    });

    const preload = getElement('#preload');
    window.addEventListener('load', () => {
      delay(() => changeClass(preload, 'null', 'loaded'), 400);
    });
  }
}
