import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Contacts:any[]=[];
  public id:string = '';
  public message!:string;
  public isError: boolean = false;
  public isSuccess: boolean = false;
  constructor(private contactsService: ContactsService,private _router:Router) { }

  ngOnInit(): void {
    this.contactsService.listContacts().subscribe(response=>{
      this.Contacts = response.Contacts;
    })
  }
  onClick(cid:any){
    this.id = this.Contacts[cid]._id;
    this.isSuccess = false;
    this.isError = false;
  }
  onDelete(){
    this.contactsService.DeleteContact(this.id).subscribe(response=>{
      this.message = response.message;
      this.isSuccess = true;
      this.isError = false;
      this.contactsService.listContacts().subscribe(response=>{
        this.Contacts = response.Contacts;
      })
    },err=>{
      this.message = err.error.message;
      this.isSuccess = false;
      this.isError =true;
    }
    )
  }
}
