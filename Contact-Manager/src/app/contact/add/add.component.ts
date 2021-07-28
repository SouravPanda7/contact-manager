import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactsService } from 'src/app/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public contact = new Contact('','','','');
  public message!: string;
  public isError: boolean = false;
  public isSuccess: boolean = false;
  constructor(private contactService: ContactsService , private _router:Router) { }

  ngOnInit(): void {
    console.log(this.contact)
  }

  onSubmit(){
    this.contactService.AddContact(this.contact).subscribe(response => {
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
