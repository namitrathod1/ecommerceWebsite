import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { appConstant } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class ProductsdetailsService {
  products :any;
  constructor(private http:HttpClient) { }
  getproducts(limit?:number, skip?:number): any{
  if(limit && !skip){
    this.http.get(`${environment.apiEndpoint}${appConstant.apiRoute.products}?limit=${limit}`)
  }
  else if(skip && !limit){
    this.http.get(`${environment.apiEndpoint}${appConstant.apiRoute.products}?skip=${skip}`)
  }
  else if(limit && skip){
    this.http.get(`${environment.apiEndpoint}${appConstant.apiRoute.products}?limit=${limit}&skip=${skip}`)
  }
  else{
    this.http.get(`${environment.apiEndpoint}${appConstant.apiRoute.products}`)
  }
}
  // {
  //   return this.http.get(`${environment.apiEndpoint}${appConstant.apiRoute.products}?limit=${limit}&skip=${skip}`)
  // }

  
}
