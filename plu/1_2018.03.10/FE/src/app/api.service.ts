import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    messages = []
    users = []

    constructor(private http: Http) { }

    apiUrl = 'http://localhost:3000/'
    getMessages() {
        this.http.get(this.apiUrl + 'posts').subscribe(res => {
            this.messages = res.json()
        });
    }
    getUsers() {
        this.http.get(this.apiUrl + 'users').subscribe(res => {
            this.users = res.json()
        });
    }
}