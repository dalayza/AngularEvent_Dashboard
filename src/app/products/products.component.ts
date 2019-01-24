import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task/task.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  productObserver;

  constructor(private _taskService: TaskService) {
    this._taskService.productObserver.subscribe((products) => {
      this.products = products;
    })
  }

  addProduct(product){
    this._taskService.createProduct(product);
  }

  deleteProduct(product){
    this._taskService.deleteProduct(product);
  }

  ngOnInit() {
  }

}
