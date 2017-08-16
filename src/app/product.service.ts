import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts(){
    return this.http.get('/assets/products.json')
              .map(res => res.json());
  }

  getProductByName(name: string){
    return this.http.get('/assets/products.json')
              .map(res => res.json())
              .map(products => {
                const product = products.find(p => p.name === name);
                return product;
              });
  }


}
