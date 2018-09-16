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
    if (window.localStorage['userToken']) {
      console.log(window.localStorage['userToken']);
      this.router.navigateByUrl('/messageList');
    }
  }

  onSubmit() {
    this.loginService.login(this.user)
      .subscribe(
        res => {
          if (res) {
            this.error = false;
            window.localStorage['userToken'] = res.token;
            this.router.navigateByUrl('/messageList');
          } else {
            this.error = true;
          }
        }
      );
  }
}
