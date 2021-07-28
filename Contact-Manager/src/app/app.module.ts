import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { FormsModule } from '@angular/forms';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './contact/add/add.component';
import { UpdateComponent } from './contact/update/update.component';
import { Nav2Component } from './nav2/nav2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavComponent,
    PagenotfoundComponent,
    UpdateContactComponent,
    DashboardComponent,
    AddComponent,
    UpdateComponent,
    Nav2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
