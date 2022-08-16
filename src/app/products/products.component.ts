import { Component, OnInit } from '@angular/core';
import { ProductsdetailsService } from '../service/productsdetails.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  
  constructor(private productdetail: ProductsdetailsService , private router: Router) { }

  ngOnInit(): void {
    this.productdetail.getproducts().subscribe((data: any)=>{this.products=
      (data as any).products})
  }
// goToProduct(event:any,id: number){
//  this.router.navigate(['/product', id])
//  console.log(event)
//  console.log(productid)
// }
}

