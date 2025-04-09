import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WINE_TYPES, WINES} from "../../constants";
import {IWine} from "../../interfaces";
import {RouterLink} from "@angular/router";
import {WINE_TYPE} from "../../enums";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: 'portfolio.component.html',
  styleUrl: 'portfolio.component.scss'
})
export class PortfolioComponent {
  public filteredWines: IWine[] = WINES;
  public selectedType: WINE_TYPE | 'ALL' = 'ALL';
  public wineTypes: WINE_TYPE[] = WINE_TYPES;

  filterWines(type: WINE_TYPE | 'ALL'): void {
    this.selectedType = type;
    this.filteredWines = type === 'ALL' 
      ? WINES 
      : WINES.filter(wine => wine.type === type);
  }
}
