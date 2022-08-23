import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductformComponent } from './productform/productform.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ProductComponent,
    ProductformComponent,
    ProductdetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule,MatInputModule
  ],

})
export class ProductModule { }
