import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import {
  faShoppingCart,
  faUser,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from '../../cookie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faUser = faUser;
  protected readonly faTrash = faTrash;
  cartItemCount: number = 0;
  cartItems: any[] = [];
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
    this.cartItems.push(newItem);
    this.updateCartInCookies();
  }

  removeItemFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateCartInCookies();
    }
  }

  private updateCartInCookies() {
    const cartItemsJSON = JSON.stringify(this.cartItems);
    this.cookieService.setCookie('cartItems', cartItemsJSON, 7);
  }
}
