import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;

  constructor() {}

  public login() {
    this.loggedIn = true;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
