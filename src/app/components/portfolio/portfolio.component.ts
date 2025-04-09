import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-container">
      <h1>Our Portfolio</h1>
      <div class="portfolio-content">
        <p>Explore our latest projects and achievements.</p>
        <!-- Add your portfolio items here -->
      </div>
    </div>
  `,
  styles: [`
    .portfolio-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .portfolio-content {
      margin-top: 2rem;
    }
  `]
})
export class PortfolioComponent {}
