import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    registerData = {}

    constructor(private apiService: ApiService) { }

    post() {
        console.log(this.registerData);
        this.apiService.sendUserRegistration(this.registerData);
    }


}