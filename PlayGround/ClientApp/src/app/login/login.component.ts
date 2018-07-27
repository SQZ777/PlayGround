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
    this.loginService.login(this.user).subscribe(() => console.log('api has hit'),
      error => alert(error),
      () => alert(data));
  }
}
