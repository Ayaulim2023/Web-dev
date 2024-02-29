import { Component, OnInit } from '@angular/core';
import { Category, categories } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{    
    categories: Category[] = [...categories]

    ngOnInit(){
      this.categories = [...categories]
    }   
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/