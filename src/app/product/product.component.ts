import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { appConstant } from '../app.constant';

import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  updateform: any;
  productId: any;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient, private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = (data as any).id; // data has id object  where as the product has the id value
      // console.log(data)
      // console.log(this.productId)
    });
    this.getproductfromId(this.productId);
  }

  getproductfromId(id: number) {
    this.http
      .get(`${environment.apiEndpoint}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        console.log(data);
        // this.updateforms(data);
        this.product = data as any;
      });
  }

  updateforms(product:any){
  this.updateform=this.fb.group({
  title: [product.title, Validators.required],
  description: [product.description, [Validators.required]],
  discount: [product.discountPercentage, Validators.required],
  price: [product.price, Validators.required],
  stock: [product.stock, Validators.required],
  category:[product.category, Validators.required]
  
});}
submit() {
  console.log(this.updateform.value);
}
}
