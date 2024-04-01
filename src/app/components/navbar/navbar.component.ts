import { Component } from '@angular/core';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faUser = faUser;
  constructor(private router:Router) { }

  isLoginPage() {
    return this.router.url === '/login';
  }
}
