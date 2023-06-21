import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { CartItem } from '../cart.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cartItem: any;
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number
  }>();  

  onCartItemDeleted(event: any) {
    const id = event.target.getAttribute('id');
    this.cartItemDeleted.emit({
        productId: id
      });
  }  

  onCartItemChanged(event: any) {
    const id = event.target.getAttribute('id');
    this.cartItemChanged.emit({
        productId: id
      });    
  }

  constructor() {
   }

  ngOnInit() {

  }

}
