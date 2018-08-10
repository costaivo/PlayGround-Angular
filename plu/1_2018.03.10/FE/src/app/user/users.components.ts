import { Component, OnInit } from '@angular/core'
import { ApiService } from '../services';


@Component({
    selector: 'users',
    template: `
    <div *ngFor="let user of apiService.users">
    <mat-card [routerLink]="['/profile',user._id]" style="cursor:pointer">{{user.name}}</mat-card>
    </div>
    `
})

export class UsersComponent implements OnInit {
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getUsers();
        console.log(this.apiService.users);
    }
}