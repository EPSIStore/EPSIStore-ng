import { Component, ViewEncapsulation } from '@angular/core';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faUser = faUser;
  constructor() { }


}
