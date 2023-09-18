import { Component } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [...products];

  share(){
    window.alert('the product has been sharesd!');
  }
  onNotify(word:string){
    window.alert("You will be notified when the product goes on sale "+ word);
  }
}
