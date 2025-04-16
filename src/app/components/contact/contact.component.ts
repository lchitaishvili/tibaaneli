import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss'
})
export class ContactComponent {
  public form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.email),
    message: new FormControl(''),
  });

  sendEmail(): void {
    if (this.form.valid) {
      emailjs.send(
        'service_lletywd',
        'template_oyfrvbb',
        this.form.value,
        'qqkHqMQQyNI5cgt_Z'
      ).then();
      this.form.reset();
      alert('Message Sent Successfully');
    }
  }
}

