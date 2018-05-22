import { Component, OnInit, Inject } from '@angular/core';
import {ProductsService} from 'app/service/product.service';
import { FilterModel, Product } from 'app/model/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(@Inject('ProductsService') public productService: ProductsService) { }

  ngOnInit() {
  }

  getProducts(): Product[] {
  this.productService.getProducts(null).subscribe(
    data => {
        this.products = data;
    }
);
  return this.products;
  } 

}
