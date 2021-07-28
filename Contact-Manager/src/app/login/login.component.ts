import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isError: boolean = false;
  public isSuccess: boolean = false;
  public message!: string;
  public email!: string;
  public password!: string;
  constructor(private _userservice:UserService , private _router:Router) { }

  ngOnInit(): void {
  }

  onlogin(){
    const loginInfo={
      email:this.email,
      password:this.password
    }
    this._userservice.loginUser(loginInfo).subscribe(response => {
      this.message = response.message;
      this.isSuccess = true;
      this.isError = false;
      localStorage.setItem('token',response.token)
      localStorage.setItem('userid',response.userdata.id)
      console.log(`Data imported to local storage`)
      this._router.navigate(['/home'])
    },err=>{
      console.log(err)
      this.message = err.error.message;
      this.isSuccess = false;
      this.isError =true;
    })
  }

}
