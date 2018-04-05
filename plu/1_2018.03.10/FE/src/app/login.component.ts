import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    loginData = {}

    constructor(private apiService: ApiService) { }

    login() {
        this.apiService.loginUser(this.loginData);
    }
}