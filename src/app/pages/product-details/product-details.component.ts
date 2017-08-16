import { Product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  myProduct: Product;
  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {

    // this.route.params.subscribe(val => {
    //   this.service.getProductByName(val.productName)
    //     .subscribe(product => {          
    //       this.myProduct = product;
    //     });
    // });

    this.route.params
      .switchMap(val => this.service.getProductByName(val.productName))
      .subscribe(product => this.myProduct = product);

  }

}
