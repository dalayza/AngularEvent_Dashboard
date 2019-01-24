import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class TaskService {

  products = [
    {title:'Bike', price:'99.99', pic:'http://media.nashbar.com/images/nashbar/products/product-hi/YB-RT1K-NCL-ANGLE.jpg?resize=1500px:1500px&output-quality=100'}
  ];
  productObserver = new BehaviorSubject(this.products);

  constructor(private _http: Http) { }

  createProduct(product) {
    console.log(product);
    this.products.push(product);
    this.productObserver.next(this.products);
  }

  updateProduct(product, idx) {
    this.products[idx] = product;
  }

  deleteProduct(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
  }

  getThisProduct(idx) {
    return this.products[idx];
  }
}
