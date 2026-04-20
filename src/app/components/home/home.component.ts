import { Component } from '@angular/core';
import { FEATURED_PRODUCTS, WINES } from '../../constants';
import {IWine} from "../../interfaces";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly heroSlideImages = [
    'assets/images/vineyard-2.jpg',
    'assets/images/grapes.webp',
    'assets/images/tree.webp'
  ];

  currentHeroSlide = 0;
  currentProductSlide = 1;
  productSlideItems: IWine[] = WINES.filter(wine => FEATURED_PRODUCTS.includes(wine.id)).reverse();

  onHeroSlideAnimationEnd(slideIndex: number) {
    if (slideIndex !== this.currentHeroSlide || this.heroSlideImages.length <= 1) {
      return;
    }

    this.currentHeroSlide = (this.currentHeroSlide + 1) % this.heroSlideImages.length;
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
