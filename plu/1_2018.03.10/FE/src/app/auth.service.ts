import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    apiUrl = 'http://localhost:3000/auth/';

    TOKEN_KEY = 'token'

    get token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    sendUserRegistration(registerData) {
        this.http.post(this.apiUrl + 'register', registerData).subscribe(res => {

        });
    }
    loginUser(loginData) {
        this.http.post<any>(this.apiUrl + 'login', loginData).subscribe(res => {
            localStorage.setItem(this.TOKEN_KEY, res.token)
        });
    }
}