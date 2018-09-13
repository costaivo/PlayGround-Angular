import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  pageTitle = 'Product Details';
  errorMessage: string;
  
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    let param = +this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id)
      .subscribe(product => this.product = product,
        error => this.errorMessage = <any>error);

  }
  onBack(): void {
    this.router.navigate(['/products'])
  }
}
