import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../task/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  newProduct = { title:'', price:'', pic:'' }
  
  constructor(private _taskService: TaskService, private _router: Router) { }

  ngOnInit() {
  }

  createProduct() {
    console.log(this.newProduct);
    this._taskService.createProduct(this.newProduct);
    this._router.navigate(['','products']);
  }
}
