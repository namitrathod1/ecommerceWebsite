import { Component, OnInit } from '@angular/core';
import { ProductsdetailsService } from '../service/productsdetails.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productdetail: ProductsdetailsService) { }

  ngOnInit(): void {
    this.productdetail.getproducts().subscribe((data: any)=>{this.products=
      (data as any).products})
  }

}

