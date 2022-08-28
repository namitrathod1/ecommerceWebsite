import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsdetailsService } from '../service/productsdetails.service';
import { Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';
import { environment } from '../../environments/environment';
import { appConstant } from '../app.constant';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  length: number | undefined;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent | undefined;
  skip:number | undefined;
  constructor(private productdetail: ProductsdetailsService , private router: Router,private http:HttpClient ) { }


  ngOnInit(): void {
    this.getProducts(this.pageSize)
    // this.productdetail.getproducts(this.pageSize).subscribe((data: any)=>{
    //   this.products = (data as any).products;
    //   this.length = (data as any).total;
    // })
    // this.productdetail.getproducts(this.pageEvent?.pageSize,this.skip).subscribe((data: any)=>{this.products=
    //   (data as any).products;
    //   this.length = (data as any).total;
    //   console.log(length)
    // })
  }
  getProducts(limit?:number, skip?:number){
    let productApiUrl:string;
    if(limit && !skip){
      productApiUrl=`${environment.apiEndpoint}${appConstant.apiRoute.products}?limit=${limit}`
    }
    else if(skip && !limit){
      productApiUrl=`${environment.apiEndpoint}${appConstant.apiRoute.products}?skip=${skip}`
    }
    else if(limit && skip){
      productApiUrl=`${environment.apiEndpoint}${appConstant.apiRoute.products}?limit=${limit}&skip=${skip}`
    }
    else{
      productApiUrl=`${environment.apiEndpoint}${appConstant.apiRoute.products}`
    }
    
    this.http.get(productApiUrl).subscribe((data:any)=>{
      this.products = (data as any).products;
      this.length = (data as any).total;
      // console.log(this.length)
    })
  }
// goToProduct(event:any,id: number){
//  this.router.navigate(['/product', id])
//  console.log(event)
//  console.log(productid)
// }
onnext(pgevent:PageEvent){
  this.pageEvent = pgevent;
  let skip= pgevent.pageSize* pgevent.pageIndex;
  this.getProducts(pgevent.pageSize, skip)
  // console.log(skip)
  // this.getproducts(this.pageEvent?.pageSize,this.skip).subscribe((data: any)=>{this.products=
  //   (data as any).products;
  //   this.length = (data as any).total;
  //   console.log(length)
  // })
}

// gotoservice(limit?:number, skip?:number){
//   this.productdetail.getproducts(this.pageEvent?.pageSize,this.skip).subscribe((data: any)=>{this.products=
//     (data as any).products;
//     this.length = (data as any).total;
//     console.log(length)
//   })
// }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    
    }
  }
}
  
