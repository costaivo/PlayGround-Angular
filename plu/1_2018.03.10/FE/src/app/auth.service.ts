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

    get isAuthenticated() {
        //This function returns a boolean value. First negation does that.
        //Second negation gives the value if user is authenticated
        //The one line statement executes the same codeflow as the one shown below. 
        /*
        var token = localStorage.getItem(this.TOKEN_KEY)
         if(token)
            return true
         else 
            return false
        */
        return !!localStorage.getItem(this.TOKEN_KEY)
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