import { NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [ 
{path : 'signin' , component : SigninComponent},
{path : 'home' , component : HeaderComponent},
{path : 'signup', component: SignupComponent}
{ path: '', redirectTo: 'signin', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
