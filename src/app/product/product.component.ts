import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../models/product.model';

@Component({
 styleUrls: ['./product.component.scss'],
 selector: 'app-product',
 templateUrl: './product.component.html' 
})

export class ProductComponent {   
   
    @Input() product: Product; // -> De esta manera, este componente esperará la data de tipo Producto enviada desde el container.
    @Output() clickedProduct = new EventEmitter<number>()

    viewDetail() {
        console.log('viewDetail', this.product.id);
        this.clickedProduct.emit(this.product.id);
    }
}