import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myProductForm: FormGroup;
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.myProductForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      imgUrl: new FormControl()
    });
  }

  onFormSubmit(){
    this.service.addProduct(this.myProductForm.value)
      .subscribe(() => {
        alert('Added successfully');
        this.myProductForm.reset();
      });
  }

}
