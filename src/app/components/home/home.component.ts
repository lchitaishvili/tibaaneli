import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {WINES} from "../../constants";
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
export class HomeComponent implements AfterViewInit, OnDestroy {
  private productInterval: any;
  currentSlide = 1;
  totalSlides = WINES.length;
  private isAutoAdvancePaused = false;
  wines: IWine[] = WINES;

  ngAfterViewInit() {
    this.initHeroSlider();
    this.initProductSlider();
  }

  ngOnDestroy() {
    if (this.productInterval) {
      clearInterval(this.productInterval);
    }
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

  private initProductSlider() {
    // Show first slide initially
    this.showSlide(1);
  }

  showSlide(slideNumber: number) {
    // Update current slide
    this.currentSlide = slideNumber;
  }

  navigateSlide(direction: 'prev' | 'next') {
    let newSlide = this.currentSlide;

    if (direction === 'next') {
      newSlide = this.currentSlide >= this.totalSlides ? 1 : this.currentSlide + 1;
    } else {
      newSlide = this.currentSlide <= 1 ? this.totalSlides : this.currentSlide - 1;
    }

    this.showSlide(newSlide);
  }

  private pauseAutoAdvance() {
    this.isAutoAdvancePaused = true;
    if (this.productInterval) {
      clearInterval(this.productInterval);
      this.productInterval = null;
    }
  }

  private startAutoAdvance() {
    if (!this.isAutoAdvancePaused) {
      this.productInterval = setInterval(() => this.navigateSlide('next'), 5000);
    }
  }
}
