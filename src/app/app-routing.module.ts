import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateComponent } from './products/products-create/products-create.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    children: []
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsComponent,
    children: []
  },
  {
    path: 'products/create',
    pathMatch: 'full',
    component: ProductsCreateComponent,
    children: []
  },
  {
    path: 'products/edit/:id',
    component: ProductsEditComponent,
    children: []
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
