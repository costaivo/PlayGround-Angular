import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    constructor() { }

    ngOnInit() { }
}