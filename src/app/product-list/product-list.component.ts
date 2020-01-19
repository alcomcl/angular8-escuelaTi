import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: 'Producto 1',
      price: 200,
      text: 'Super breakfast',
      image: 'assets/images/img2.jpg',
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 260,
      text: 'Super breakfast super',
      image: 'assets/images/img2.jpg',
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  onClickedProduct(id: number){
    console.log('clicked', id);
  }

}
