import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/contact';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public contact = new Contact('','','','');
  public message!: string;
  public isError: boolean = false;
  public isSuccess: boolean = false;
  public contactid!: string;
  constructor(private contactsService: ContactsService, private _router: Router, private _acroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      this.contactid = param.id;
    })

    this.contactsService.SearchContact(this.contactid).subscribe(response=>{
      this.message = response.message;
      this.contact = response.contactData;
    })
  }
  onSubmit(){
    this.contactsService.UpdateContact(this.contactid,this.contact).subscribe(response=>{
      this.message = response.message;
      this.isSuccess = true;
      this.isError = false;
      this._router.navigate(['/home'])
      alert(this.message)
    },err=>{
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
    }
    )
  }

}
