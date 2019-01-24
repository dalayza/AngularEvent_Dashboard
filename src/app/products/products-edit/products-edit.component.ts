import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../task/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  product = { title:'', price:'', pic:'' }
  idx;

  constructor(private _taskService: TaskService, private _route: ActivatedRoute, private _router: Router) {
    this._route.paramMap.subscribe( params => {
      this.product = this._taskService.getThisProduct(params.get('id'));
      this.idx = params.get('id');
    })
  }

  editProduct(idx) {
    this._taskService.updateProduct(this.product, idx);
    this._router.navigate(['','products']);
  }

  deleteProduct(product){
    this._taskService.deleteProduct(product);
  }

  ngOnInit() {
  }

}
