import {Component, inject, Input} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  copyText(text: string) {
    navigator.clipboard.writeText(text)
      .then(() => console.log("Text copied to clipboard"))
      .catch((err) => console.log("Error: Failed to copy text"))
  }
}
