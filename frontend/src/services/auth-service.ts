import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

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
}
