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
  getproducts()
  {
    return this.http.get(`${environment.apiEndpoint}${appConstant.apiRoute.products}`)
  }
  
}
