import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NgOptimizedImage} from '@angular/common';
import { Product } from '../products';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  category: string = ""
  products: Product[] | [] = []

  constructor(private pS: ProductsService, private route: ActivatedRoute){
  }


  getProducts(): Product[] | null{
    return this.pS.getProducts(this.category) ?? null
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
        if(params['category']){
        this.category = params['category']
        console.log(this.category)
        this.products = this.getProducts() ?? []
      }else{
        this.products = []
      }
    })
  }

  onRefresh(): void{
    this.route.queryParams
    .subscribe(params => {
        if(params['category']){
        this.category = params['category']
        console.log(this.category)
        this.products = this.getProducts() ?? []
      }else{
        this.products = []
      }
    })
  }
  
  removeProduct(productName: string): void{
    this.pS.removeProduct(productName, this.category);
    this.onRefresh();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/