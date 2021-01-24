import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PurchaseCalculatorComponent} from './purchase-calculator.component';

const routes: Routes = [
  { path: '', component: PurchaseCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseCalculatorRoutingModule { }
