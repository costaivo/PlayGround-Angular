import { NgModule } from '@angular/core';


import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,

  ]
})
export class ProductModule { }
