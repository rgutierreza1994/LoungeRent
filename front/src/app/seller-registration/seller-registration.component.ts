import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-buyer-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})


export class SellerRegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  emailIsValid: boolean = true;

  
  validateEmail() {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.emailIsValid = emailPattern.test(this.email);
  }

  registerUser() {
    if (!this.emailIsValid) {
      alert('El correo electrónico no es válido');
      return;
    }
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  }
}



