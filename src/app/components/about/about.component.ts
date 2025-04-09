import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <h1>About Us</h1>
      <div class="about-content">
        <p>Learn more about our story, mission, and values.</p>
        <!-- Add your about content here -->
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .about-content {
      margin-top: 2rem;
    }
  `]
})
export class AboutComponent {}
