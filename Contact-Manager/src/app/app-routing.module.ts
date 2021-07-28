import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddComponent } from './contact/add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './contact/update/update.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"home",component:HomeComponent},
  {path:"contact/add",component:AddComponent},
  {path:"contact/update/:id",component:UpdateComponent},
  {path:"**",component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
