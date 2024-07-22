import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('authToken');
  }

  setToken(newToken: string) {
    this.token = newToken;
    localStorage.setItem('authToken', newToken);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('authToken');
    }
    return this.token;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  isAuthorized(mitarbeiterId: string) {
    return this.http.post(`${environment.apiUrl}/auth/login`, {}, {
      headers: new HttpHeaders({
        "authorization": mitarbeiterId,
      }),
      observe: "response",
    });
  }
}
