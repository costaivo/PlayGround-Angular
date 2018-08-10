import { Component, OnInit } from '@angular/core';
import { ApiService } from './services';

@Component({
    selector: 'posts',
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {
    constructor(private apiService: ApiService) { }

    postMessage = ''
    ngOnInit() {

    }
    post() {
        this.apiService.postMessage({ message: this.postMessage });
    }
}