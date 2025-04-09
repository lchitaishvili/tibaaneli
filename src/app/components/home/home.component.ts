import {AfterContentInit, AfterViewInit, Component} from '@angular/core';
import {changeAttribute, getElement} from "../../helpers";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterContentInit {
  ngAfterContentInit() {
    const heroSlider = getElement('#heroSlider');

    if(heroSlider) {
      const heroBg = getElement('.hero-bg'),
          heroSlides = heroBg.children.length;

      let curSlide = 1;

      const heroPagination = (slide: any) => {
        heroBg
            .querySelectorAll('li')
            .forEach((item: any) => changeAttribute(item, 'hidden', true));

        getElement(`.hero-bg li[data-slide="${CSS.escape(slide)}"]`).removeAttribute('hidden');

        curSlide >= heroSlides ? curSlide = 1 : curSlide++;
      };

      setInterval(() => heroPagination(curSlide), 4500);
    }
  }
}
