import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/user-side/homepage/homepage.component';
import { IntropageComponent } from './page/user-side/intropage/intropage.component';
import { NavComponentComponent } from './component/nav-componentt/nav-component.component';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductPageComponent } from './page/user-side/product-page/product-page.component';
import { ItemPageComponent } from './page/user-side/item-page/item-page.component';
import { FormsModule } from '@angular/forms';
import { BillingComponent } from './page/user-side/billing/billing.component';
import { CartComponent } from './component/cart/cart.component';
import { NoFoundComponent } from './page/user-side/no-found/no-found.component';
import { ModalComponent } from './component/modal/modal/modal.component';
import { PopUpDialogComponent } from './component/modal/popup-dialog/pop-up-dialog/pop-up-dialog.component';
import { OverlayComponent } from './component/modal/overlay/overlay/overlay.component';


let userComponent = [
  HomepageComponent,
  IntropageComponent,
  NavComponentComponent,
  FooterComponentComponent,
  ProductPageComponent,
  ItemPageComponent,
  CartComponent,
  BillingComponent,
  NoFoundComponent,
]

@NgModule({
  declarations: [
    ...userComponent,
    AppComponent,
    ModalComponent,
    PopUpDialogComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
