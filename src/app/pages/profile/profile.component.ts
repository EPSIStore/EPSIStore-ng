import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../core/services/token.service';
import { FidelityReward } from '../../core/models/profile/fidelity-rewards.model';
import { FidelityChange } from '../../core/models/profile/fidelity-change.model';
import { DateModel } from '../../core/models/profile/date.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  edit = {
    username: '',
    email: '',
    password:'',
    oldPassword: '',
  };
  username : string = "";
  email : string = "";
  fidelityPoints : number = 0;
  maxFidelityPoints : number = 0;
  fidelityRewards : Array<FidelityReward> = new Array();
  fidelityHistory : Array<FidelityChange> = new Array();
  error : boolean = false;
  editMessage : string = '';
  editUsername : boolean = false;
  editEmail : boolean = false;
  editPassword : boolean = false;
  fidelity : boolean = false;

  constructor(private route: ActivatedRoute, private router : Router, private userService : UserService, public tokenService : TokenService){}

  DateModelFromChange(change : FidelityChange){
    return DateModel.timestampToDate(change.updateDate);
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      const editUsernameParam = params["username"];
      if(editUsernameParam != null && editUsernameParam != false){
        this.editUsername = true;
        return;
      }
      const editEmailParam = params["email"];
      if(editEmailParam != null && editEmailParam != false){
        this.editEmail = true;
        return;
      }
      const editPasswordParam = params["password"];
      if(editPasswordParam != null && editPasswordParam != false){
        this.editPassword = true;
        return;
      }
      const fidelityParam = params["fidelity"];
      if(fidelityParam != null && fidelityParam != false){
        this.fidelity = true;
        return;
      }
    });
    if(!this.editUsername && !this.editEmail && !this.editPassword){
      this.userService.getUserInformations().subscribe({
        error: (e) =>{
          this.error = true;
        },
        next: (v) =>{
          this.username = v.username;
          this.email = v.email;
          this.fidelityPoints = v.fidelityPoints;
        }
      });
      this.userService.getFidelityRewards().subscribe({
        error: (e) =>{
          this.error = true;
        },
        next: (v) =>{
          console.log(v.body);
          this.fidelityRewards = v.body;
        }
      });
      this.userService.getMaxFidelityPoints().subscribe({
        next: (v) =>{
          this.maxFidelityPoints = v.body;
        }
      });
      this.userService.getFidelityHistory().subscribe({
        next: (v) =>{
          this.fidelityHistory = v.body as Array<FidelityChange>;
          this.fidelityHistory.sort((a,b) => {
            const dateA : DateModel = DateModel.timestampToDate(a.updateDate);
            const dateB : DateModel = DateModel.timestampToDate(b.updateDate);
            if(dateA.earlierThan(dateB)){
              return 1;
            }
            if(dateB.earlierThan(dateA)){
              return -1;
            }
            return 0;
          });
          console.log(this.fidelityHistory);
        }
      });
    }
  }

  Edit(){
    if(this.edit.username != ''){
      this.userService.changeUsername({
        newUsername : this.edit.username,
        password : this.edit.oldPassword
      }).subscribe({
        error: (e) =>{
          this.editMessage = e.body;
        },
        next: (v) =>{
          this.editMessage = v.body;
        },
      });
    }
    else if(this.edit.email != ''){
      
    }
    else if(this.edit.password != ''){
      
    }
  }

  ChangeUsername(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/profile"], {queryParams: { username: "true"}});
    });
  }

  ChangeEmail(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/profile"], {queryParams: { email: "true"}});
    });
  }

  ChangePassword(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/profile"], {queryParams: { password: "true"}});
    });
  }

  ToFidelity(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/profile"], {queryParams: { fidelity: "true"}});
    });
  }

  Back(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/profile"]);
    });
  }
}
