import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  @Input() product:any;
  constructor() { }

  ngOnInit(): void {
  }

}
