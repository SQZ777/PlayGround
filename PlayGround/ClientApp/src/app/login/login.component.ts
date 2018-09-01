import { Component, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User;

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }
  // this.router.navigateByUrl('/messageList')
  onSubmit() {
    console.log('test');
    if (this.test()) {
      this.loginService.login(this.user).subscribe(() => console.log('api has hit'),
        error => alert(error),
        () => this.router.navigateByUrl('messageList'));
    }
  }

  test() {
    if (this.user.account !== null || this.user.password !== null) {
      alert('shoud input account');
      return false;
    }
    return true;
  }
}
