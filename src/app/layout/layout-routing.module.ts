import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)},
      { path: 'products', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)},
      { path: 'calculator', loadChildren: () => import('./purchase-calculator/purchase-calculator.module').then(m => m.PurchaseCalculatorModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
