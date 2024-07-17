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
  }

  setToken(newToken: string) {
    this.token = newToken;
  }

  getToken(): string | null {
    return this.token;
  }

  // Optionally, you can add a method to clear the token
  logout() {
    this.token = null;
    this.router.navigate(['/login']);
  }

  isAuthorized(mitarbeiterId: string) {
    console.log("isAuthorized", mitarbeiterId);
    return this.http.post(`${environment.apiUrl}/auth/login`, {}, {
      headers: new HttpHeaders({
        "authorization": mitarbeiterId,
      }),
      observe: "response",
    });
  }
}
