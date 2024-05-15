import { Component } from '@angular/core';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TokenService } from '../../core/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faUser = faUser;

  link = "/login";

  constructor(private router:Router, public tokenService: TokenService) { }

  isLoginPage() {
    return this.router.url === '/login';
  }
}
