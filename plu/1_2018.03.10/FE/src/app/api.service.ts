import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    messages = []
    users = []

    constructor(private http: Http) { }

    apiUrl = 'http://localhost:3000/'
    getMessages(userId) {
        this.http.get(this.apiUrl + 'posts/' + userId).subscribe(res => {
            this.messages = res.json()
        });
    }
    postMessage(message) {
        this.http.post(this.apiUrl + 'post', message).subscribe(res => {

        });
    }
    getUsers() {
        this.http.get(this.apiUrl + 'users').subscribe(res => {
            this.users = res.json()
        });
    }
    getProfile(id) {
        return this.http.get(this.apiUrl + 'profile/' + id);
    }
}