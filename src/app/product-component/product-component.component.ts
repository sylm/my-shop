import { Component, OnInit, Inject } from '@angular/core';
import {Category} from 'app/model/models';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;


  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log('Product was bought');
  }

}
