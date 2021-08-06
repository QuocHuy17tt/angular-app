import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypeProduct } from '../product/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: TypeProduct = {
    id : 0,
    name: '',
    price: 0,
    status: false,
    img: ''
  };
  constructor(private productService : ProductService) {}

  ngOnInit() {}
  onAddProduct() {
    this.productService.AddProduct(this.product).subscribe(data => {
      console.log(data);
    });
  }
}
