import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private http: Http) { }

    apiUrl = 'http://localhost:3000/';


    sendUserRegistration(registerData) {
        this.http.post(this.apiUrl + 'register', registerData).subscribe(res => {

        });
    }
    loginUser(loginData) {
        this.http.post(this.apiUrl + 'login', loginData).subscribe(res => {
            localStorage.setItem('token', res.json().token)
        });
    }
}