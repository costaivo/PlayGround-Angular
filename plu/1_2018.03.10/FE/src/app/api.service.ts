import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    messages = [];

    constructor(private http: Http) { }

    apiUrl = 'http://localhost:3000/';
    getMessages() {
        this.http.get(this.apiUrl + 'posts').subscribe(res => {
            this.messages = res.json();
        });
    }

    sendUserRegistration(registerData) {
        this.http.post(this.apiUrl + 'register', registerData).subscribe(res => {

        });
    }
    loginUser(loginData) {
        this.http.post(this.apiUrl + 'login', loginData).subscribe(res => {
        });
    }
}