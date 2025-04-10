import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WINES } from '../../constants';
import { IWine } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  wine: IWine | undefined;
  expandedSections: Set<number> = new Set();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.wine = WINES.find(wine => wine.id === id);
    });
  }

  toggleSection(index: number): void {
    if (this.expandedSections.has(index)) {
      this.expandedSections.delete(index);
    } else {
      this.expandedSections.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedSections.has(index);
  }
} 