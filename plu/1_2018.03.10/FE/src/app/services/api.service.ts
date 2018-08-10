import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    messages = []
    users = []

    constructor(private http: HttpClient) { }

    apiUrl = 'http://localhost:3000/'
    getMessages(userId) {
        this.http.get<any>(this.apiUrl + 'posts/' + userId).subscribe(res => {
            this.messages = res
        });
    }
    postMessage(message) {
        this.http.post(this.apiUrl + 'post', message).subscribe(res => {

        });
    }
    getUsers() {
        this.http.get<any>(this.apiUrl + 'users').subscribe(res => {
            this.users = res
        });
    }
    getProfile(id) {
        return this.http.get<any>(this.apiUrl + 'profile/' + id);
    }
}