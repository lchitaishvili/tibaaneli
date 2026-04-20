import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the first hero slide as active initially', () => {
    const heroSlides = fixture.nativeElement.querySelectorAll('.hero-slide') as NodeListOf<HTMLElement>;

    expect(heroSlides.length).toBe(component.heroSlideImages.length);
    expect(heroSlides[0].classList.contains('active')).toBeTrue();
    expect(heroSlides[0].style.backgroundImage).toContain(component.heroSlideImages[0]);
  });

  it('should advance the hero slider when the active animation ends', () => {
    const getHeroSlides = () => fixture.nativeElement.querySelectorAll('.hero-slide') as NodeListOf<HTMLElement>;

    expect(getHeroSlides()[0].classList.contains('active')).toBeTrue();

    getHeroSlides()[0].dispatchEvent(new Event('animationend'));
    fixture.detectChanges();

    expect(component.currentHeroSlide).toBe(1);
    expect(getHeroSlides()[1].classList.contains('active')).toBeTrue();
    expect(getHeroSlides()[1].style.backgroundImage).toContain(component.heroSlideImages[1]);
  });

  it('should wrap product slide navigation in both directions', () => {
    component.currentProductSlide = component.productSlideItems.length;
    component.navigateSlide('next');
    expect(component.currentProductSlide).toBe(1);

    component.currentProductSlide = 1;
    component.navigateSlide('prev');
    expect(component.currentProductSlide).toBe(component.productSlideItems.length);
  });
});
