import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

const routes: Routes = [
  {
    path: 'products', 
    component: ProductsComponent
  },
  {
    path: 'product/:id', 
    component: ViewProductComponent
  },
  {
    path: 'invoices', 
    component: InvoicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
