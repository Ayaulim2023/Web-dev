import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products'
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent{
  @Input() product!: Product;
  @Input() category!: String;
  @Output() removeProductEvent = new EventEmitter<string>()

  constructor(private pS: ProductsService){}

    
  share(productName: string, productUrl: string) {
    window.open(`https://telegram.me/share/url?url=Welcome, you should buy ${productName} &text= on ${productUrl}`)  
  }

  onNotify(){
    window.alert("You will be notified when the products goes on sale");
  }

  toggleLike(){
    this.product.liked = !this.product.liked;
    this.product.numLikes += this.product.liked ? 1 : -1;

  }

  removeProduct(){
    this.removeProductEvent.emit(this.product.name)
  }


}