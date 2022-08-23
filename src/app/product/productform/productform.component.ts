import { Component, Input, OnInit } from '@angular/core';


import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  productform: any;
  maxdiscount:number = 100;
  @Input() product:any;

  constructor(private fb: FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    if (this.product){
      this.initializeForm(this.product)
    }
  }

  initializeForm(product:any){
    this.updateforms(product)
  }

  updateforms(product:any){
    this.productform=this.fb.group({
    title: [product.title, Validators.required],
    description: [product.description, [Validators.required]],
    discount: [product.discountPercentage, [Validators.required, Validators.max(this.maxdiscount)]],
    price: [product.price, Validators.required],
    stock: [product.stock, Validators.required],
    category:[product.category, Validators.required]
    
  });}
  submit(formData: any, isValid: boolean) {
    console.log(this.productform.value)
 
  }

}
