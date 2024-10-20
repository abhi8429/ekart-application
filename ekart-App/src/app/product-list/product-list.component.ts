import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  productList = {
    name: 'Iphone 16pro',
    price: 5000,
    color: 'Meta-Black',
    discountPrice: 8.5,
    Instock:5
  };

  getDiscount(){
    return this.productList.price-(this.productList.price*this.productList.discountPrice/100);
  }
}
