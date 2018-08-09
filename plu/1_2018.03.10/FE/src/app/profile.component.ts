import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    constructor(private apiService: ApiServic, private route: ActivatedRoute) { }

    ngOnInit() {
        var id = this.route.snapshot.params.id;
        this.apiService.getProfile(id)
    }
}