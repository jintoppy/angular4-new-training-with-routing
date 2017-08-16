import { Product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<Product>  = [];
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(res => {
        this.products = res;
      });
  }

}
