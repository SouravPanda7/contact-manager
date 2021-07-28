import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public header: any= localStorage.getItem('token');
  constructor(private _http: HttpClient) { }
  listContacts() {
    return this._http.get<{message: string,Contacts:any}>(environment.baseUrlContact+"/"+localStorage.getItem('userid'),{
      headers : new HttpHeaders().set('x-auth-token',this.header),
    });
  }
  AddContact(contact:any){
    return this._http.post<{message: string,ContactData:any}>(environment.baseUrlContact+"/save/"+localStorage.getItem('userid'),contact,{
      headers : new HttpHeaders().set('x-auth-token',this.header),
    });
  }
  DeleteContact(contactid:any){
    return this._http.delete<{message:string}>(environment.baseUrlContact+"/delete/"+contactid,{
      headers : new HttpHeaders().set('x-auth-token',this.header),
    })
  }
  SearchContact(contactid:any){
    return this._http.get<{message:string ,contactData:any}>(environment.baseUrlContact+"/search/"+contactid,{
      headers : new HttpHeaders().set('x-auth-token',this.header),
    })
  }
  UpdateContact(contactid:any,contact:any){
    return this._http.put<{message:string}>(environment.baseUrlContact+"/update/"+contactid,contact,{
      headers : new HttpHeaders().set('x-auth-token',this.header)
    })
  }
}
