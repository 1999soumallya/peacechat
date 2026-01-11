import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  imports: [CommonModule],
  templateUrl: './signin.html',
})
export class Signin {
  showPassword = false;
  checkboxToggle = false;
}
