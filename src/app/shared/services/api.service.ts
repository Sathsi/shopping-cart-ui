import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private readonly appHost: string;

  constructor(private http: HttpClient) {
    this.appHost = environment.appHost;
  }

  retrieveAllProducts() {
    return this.http.get(`${this.appHost}/productPrices/priceList`);
  }

  retrieveAvailableProductNames() {
    return this.http.get(`${this.appHost}/product`);
  }

  retrieveTotalPrice(productName, purchaseType, numberOfItems) {
    return this.http.get(`${this.appHost}/productPrices/calculate/totalPrice?numberOfItems=${numberOfItems}&productName=${productName}&purchaseType=${purchaseType}`);
  }

}
