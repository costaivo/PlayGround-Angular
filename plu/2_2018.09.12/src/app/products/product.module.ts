import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

import { SharedModule } from '../shared/shared.module';

import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,

  ]
})
export class ProductModule { }
