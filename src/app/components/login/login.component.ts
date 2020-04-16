import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string = "";
  public password: string = "";
  public isInvalid: boolean = false;
  public usernameOrPassordWrong: boolean = false;

  constructor(private autenticationService: AuthenticationService, private router: Router) { }


  public login(): void {
    if (this.username && this.password) {
      this.isInvalid = false;
      // Es wurde ein Passwort und Benutzername eingegeben
      const success = this.autenticationService.login(this.username, this.password);

      this.usernameOrPassordWrong = !success;
      if (success)
        this.router.navigate(["home"]);

      console.log("Resultat", success);
    } else {
      this.isInvalid = true;
    }
  }

}
