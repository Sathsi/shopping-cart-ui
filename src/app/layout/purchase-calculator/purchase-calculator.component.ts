import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './purchase-calculator.component.html',
  styleUrls: ['./purchase-calculator.component.scss']
})
export class PurchaseCalculatorComponent implements OnInit {

  form: FormGroup;
  products: any = [];
  types: any = [];
  total = 0.00;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      product: [''],
      type: [''],
      items: [0, Validators.min(0)]
    });
     this.types = [
          'carton', 'unit'
        ];
    this.retrieveAvailableProducts();
  }

  retrieveAvailableProducts() {
    this.apiService.retrieveAvailableProductNames()
      .subscribe(
        data => {
          console.log('Received the product names');
          this.products = data;
        }, error => {
          console.log('Error retrieving product details');
        }
      );
  }


  calculate() {
    const productName=this.form.value.product;
    const purchaseType=this.form.value.type;
    const numberOfItems=this.form.value.items;

    this.apiService.retrieveTotalPrice(productName, purchaseType, numberOfItems)
          .subscribe(
            (data:number) => {
              console.log('Received the total price');
              this.total = data;
            }, error => {
              console.log('Error retrieving total price');
            }
          )
  }

  clear(){
    this.form.reset();
  }

}
