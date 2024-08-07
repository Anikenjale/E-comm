import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Seller-Auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
