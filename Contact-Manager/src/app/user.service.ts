import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public address: any = localStorage.getItem('token');

  constructor(private _http:HttpClient) { }


  registerUser(user:any){
    return this._http.post<{message:string,user:any}>(environment.baseUrlUser+'/register',user);
  }

  loginUser(loginInfo:any){
    return this._http.post<{message:string,userdata:any,token:string}>(environment.baseUrlUser+'/login',loginInfo);
  }

  // isLoggedin(){
  //   if(localStorage.getItem('token')==null){
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }
}
