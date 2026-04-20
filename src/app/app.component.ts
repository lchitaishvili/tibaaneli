import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'tibaaneli';

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine'
    });
  }
}
