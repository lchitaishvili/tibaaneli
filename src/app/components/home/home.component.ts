import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import { FEATURED_PRODUCTS, WINES } from '../../constants';
import {IWine} from "../../interfaces";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {changeAttribute, getElement} from "../../helpers";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  currentProductSlide = 1;
  productSlideItems: IWine[] = WINES.filter(wine => FEATURED_PRODUCTS.includes(wine.id)).reverse();

  ngAfterViewInit() {
    this.initHeroSlider();
    this.showProductSlide(1);
  }

  private initHeroSlider() {
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

  showProductSlide(slideNumber: number) {
    this.currentProductSlide = slideNumber;
  }

  navigateSlide(direction: 'prev' | 'next') {
    let newSlide: number;

    if (direction === 'next') {
      newSlide = this.currentProductSlide >= this.productSlideItems.length ? 1 : this.currentProductSlide + 1;
    } else {
      newSlide = this.currentProductSlide <= 1 ? this.productSlideItems.length : this.currentProductSlide - 1;
    }

    this.showProductSlide(newSlide);
  }
}
