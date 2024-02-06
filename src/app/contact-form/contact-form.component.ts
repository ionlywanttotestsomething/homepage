import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: [null, Validators.required],
    email: [null, Validators.required, Validators.email],
    messageTitle: [null, Validators.required],
    message: [null, Validators.required],
  }, {updateOn: "blur"});


  onSubmit(): void {
    this.addressForm.updateValueAndValidity()
    if (this.addressForm.valid) {
      alert('Thanks!');
    } else {
      alert('Ups, something went wrong. Check input.');
      console.log(this.addressForm.valid)
      console.log(this.addressForm.errors)
    }
  }
}
