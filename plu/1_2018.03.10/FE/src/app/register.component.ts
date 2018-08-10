import { Component, OnInit } from '@angular/core';
import { AuthService } from './services';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    registerData = {}

    constructor(private authService: AuthService) { }

    post() {
        console.log(this.registerData);
        this.authService.sendUserRegistration(this.registerData);
    }


}