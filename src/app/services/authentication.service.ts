import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn: boolean = true; // LLLLLOOGGGGGIIIINNNNNNN KAAAAAAAPPPPPUUUUUTTTTTTTTTTTTTTTTTTT

  public login(username: string, password: string): boolean {
    if (username == "test" && password == "cool")
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;

    return this.isLoggedIn;
  }

  public get loggedIn() {
    return this.isLoggedIn;
  }
}
