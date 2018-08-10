import { Component, OnInit } from '@angular/core';
import { AuthService } from './services';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    loginData = {}

    constructor(private authService: AuthService) { }

    login() {
        this.authService.loginUser(this.loginData);
    }
}