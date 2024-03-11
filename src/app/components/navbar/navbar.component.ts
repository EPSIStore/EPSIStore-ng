import { Component } from '@angular/core';
import { faCoffee, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faUser = faUser;
}
