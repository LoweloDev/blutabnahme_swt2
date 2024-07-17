import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient) {
  }


  setToken(newToken: string) {
    this.token = newToken;
  }

  getToken(): string | null {
    return this.token;
  }

  // Optionally, you can add a method to clear the token
  clearToken() {
    this.token = null;
  }

  isAuthorized(mitarbeiterId: string) {
    return this.http.post(`${environment.apiUrl}/auth/login`, undefined, {
      headers: new HttpHeaders({
        "authorization": mitarbeiterId,
      }),
      observe: "response",
    });
  }
}
