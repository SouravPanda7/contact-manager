import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this._router.navigate(['/login'])
  }
}
