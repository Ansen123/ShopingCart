import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopingCartListComponent } from './shoping-cart-list/shoping-cart-list.component';

const appRoutes:Routes=[
  {
    path:"",component:ShopingCartListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopingCartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
