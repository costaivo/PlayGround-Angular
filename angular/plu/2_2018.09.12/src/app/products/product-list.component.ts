import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string = 'cart';
    errorMessage: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {

    }

    ngOnInit() {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );

    }

    toggleImage(): void {
        console.log('Toggline Image :' + !this.showImage);
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string) {
        this.pageTitle = 'Product List: ' + message;
    }
}
