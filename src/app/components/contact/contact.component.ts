import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-container">
      <h1>Contact Us</h1>
      <div class="contact-content">
        <p>Get in touch with us for any inquiries or collaborations.</p>
        <!-- Add your contact form or contact information here -->
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .contact-content {
      margin-top: 2rem;
    }
  `]
})
export class ContactComponent {}
