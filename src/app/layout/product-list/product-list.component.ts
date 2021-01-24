import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.retrieveAllProducts();
  }

  retrieveAllProducts() {
    this.apiService.retrieveAllProducts()
      .subscribe(
      data => {
        console.log('Received the products');
        this.products = data;
      }, error => {
        console.log('Error receiving the products');
      }
    )
  }

}
