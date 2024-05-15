import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../core/services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private router : Router, private tokenService : TokenService){}

  ngOnInit(){
    this.tokenService.clearCookies();
    this.router.navigate(['/authorized']);
  }
}
