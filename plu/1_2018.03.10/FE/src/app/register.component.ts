import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    registerData = {}

    post() {
        console.log(this.registerData);
    }


}