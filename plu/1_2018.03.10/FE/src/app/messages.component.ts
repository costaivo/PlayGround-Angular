import { Component, OnInit } from '@angular/core';
import { ApiService } from './services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    template: `<div *ngFor="let message of apiService.messages">
    <mat-card>{{message.message}}</mat-card>
  </div>`
})

export class MessagesComponent implements OnInit {
    constructor(private apiService: ApiService, private route: ActivatedRoute) { }

    ngOnInit() {
        var id = this.route.snapshot.params.id;
        this.apiService.getMessages(id);
    }
}