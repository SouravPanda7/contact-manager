import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user = new User('','','','');
  public message!: string;
  public pass!: string;
  public isError: boolean = false;
  public isSuccess: boolean = false;
  public isDisabled: boolean = false;
  constructor(private _userservice:UserService) { }

  ngOnInit(): void {
  }

  comparePassword(event: any){
    this.pass=event.target.value
    if(this.pass == this.user.password){
      this.isDisabled = false;
    }
    else{
      this.isDisabled = true;
    }
  }
  onSubmit(){
    this._userservice.registerUser(this.user).subscribe(response => {
      this.message = response.message;
      this.isSuccess = true;
      this.isError = false;
    },err=>{
      console.log(err)
      this.message = err.error.message;
      this.isSuccess = false;
      this.isError =true;
    })
  }
}
