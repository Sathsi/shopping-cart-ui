import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
