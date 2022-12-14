import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  isLoading = false;
  wrongLogin = this.authService.wrongLogin;
  id = '';

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private titleService: Title, public authService: AuthService) {
    this.titleService.setTitle('Вход');
  }

  login() {
    this.isLoading = true;
    this.authService.login(
      this.loginForm.controls['login'].value,
      this.loginForm.controls['password'].value
    );
    this.isLoading = false;
  }

  ngOnInit(): void {}
}
