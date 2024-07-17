import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth-service";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatError, MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatFormFieldModule,
    MatInputModule,
    MatError,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    MatFormField,
    MatInput,
    NgIf,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mitarbeiterId: any;
  constructor(private authService: AuthService, private router: Router) {}
  login() {
    this.authService.setToken(this.mitarbeiterId);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.authService.clearToken();
  }
}
