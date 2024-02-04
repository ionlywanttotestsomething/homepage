import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AddressFormComponent } from './address-form/address-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'form', component: AddressFormComponent},
  { path: '**', pathMatch: 'full',  
  component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
