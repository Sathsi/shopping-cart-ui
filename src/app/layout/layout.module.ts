import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { PurchaseCalculatorComponent } from './purchase-calculator/purchase-calculator.component';
import { ApiService } from '../shared/services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, PurchaseCalculatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutRoutingModule
  ],
  providers: [ApiService]
})
export class LayoutModule { }
