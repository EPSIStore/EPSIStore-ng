import { Component } from '@angular/core';
import { TestService } from '../../core/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  everybody : String = "waiting response";
  role1 : String = "waiting response";
  role2 : String = "waiting response";
  admin : String = "waiting response";
  user : String = "waiting response";

  constructor(private service : TestService){}

  ngOnInit(){
    this.service.getEverybody().subscribe({
      error : (e) => {
        console.log(e);
        this.everybody = "Error";
      },
      next : (v) => {
        this.everybody = v.body;
      }
    });
    this.service.getRole1().subscribe({
      error : (e) => {
        this.role1 = "Error";
      },
      next : (v) => {
        this.role1 = v.body;
      }
    });
    this.service.getRole2().subscribe({
      error : (e) => {
        this.role2 = "Error";
      },
      next : (v) => {
        this.role2 = v.body;
      }
    });
    this.service.getAdmin().subscribe({
      error : (e) => {
        this.admin = "Error";
      },
      next : (v) => {
        this.admin = v.body;
      }
    });
    this.service.getUser().subscribe({
      error : (e) => {
        this.user = "Error";
      },
      next : (v) => {
        this.user = v.body;
      }
    });
  }
}
