import { Component, OnInit } from '@angular/core';
import { TypeProduct } from '../product/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : TypeProduct[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    // this.products = this.productService.getProducts();
  }

}
