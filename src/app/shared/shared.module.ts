import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,ReactiveFormsModule,
    HttpClientModule, MatToolbarModule, MatIconModule, MatCardModule,MatGridListModule,MatButtonModule,MatInputModule,MatPaginatorModule
  ],
  exports:[
    CommonModule,ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatIconModule, MatCardModule,MatGridListModule,MatButtonModule,MatInputModule,MatPaginatorModule
  ]
})
export class SharedModule { }
