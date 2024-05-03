import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../cookie.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartItems: any[] = [];
  protected readonly faTrash = faTrash;

  constructor(
    private cookieService: CookieService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    const cartItemsJSON = this.cookieService.getCookie('cartItems');
    if (cartItemsJSON) {
      this.cartItems = JSON.parse(cartItemsJSON);
      this.cdr.detectChanges();
    }
  }

  addItemToCart() {
    const newItem = {
      name: 'Nouvel item',
      quantity: 1,
      price: 9.99,
    };
    console.log('Adding item', newItem);
    this.cartItems = [...this.cartItems, newItem];
    console.log('Cart items', this.cartItems);
    this.updateCartInCookies();
    this.cdr.detectChanges();
  }

  removeItemFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateCartInCookies();
      this.cdr.detectChanges();
    }
  }

  private updateCartInCookies() {
    const cartItemsJSON = JSON.stringify(this.cartItems);
    this.cookieService.setCookie('cartItems', cartItemsJSON, 7);
  }
}
