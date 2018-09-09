import { Component, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User;
  error = false;
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.loginService.login(this.user)
      .subscribe(
        res => {
          if (res) {
            this.error = false;
            window.localStorage['userToken'] = res.token;
          } else {
            this.error = true;
          }
        }
      );
  }
}
