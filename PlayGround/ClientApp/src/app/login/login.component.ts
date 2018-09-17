import { Component, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { JwtService } from '../jwt/jwt.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User;
  error = false;
  constructor(private loginService: LoginService,
    private router: Router,
    private jwtService: JwtService) { }

  ngOnInit() {
    if (this.jwtService.getToken()) {
      this.router.navigateByUrl('/messageList');
    }
  }

  onSubmit() {
    this.loginService.login(this.user)
      .subscribe(
        res => {
          if (res) {
            this.error = false;
            this.jwtService.saveToken(res.token);
            this.router.navigateByUrl('/messageList');
          } else {
            this.error = true;
          }
        }
      );
  }
}
