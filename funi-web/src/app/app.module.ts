import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { IntropageComponent } from './page/intropage/intropage.component';
import { NavComponentComponent } from './component/nav-componentt/nav-component.component';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ItemPageComponent } from './page/item-page/item-page.component';
import { FormsModule } from '@angular/forms';
import { BillingComponent } from './page/billing/billing.component';
import { CartComponent } from './component/cart/cart.component';
import { NoFoundComponent } from './page/no-found/no-found.component';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntropageComponent,
    NavComponentComponent,
    FooterComponentComponent,
    ProductPageComponent,
    ItemPageComponent,
    CartComponent,
    BillingComponent,
    NoFoundComponent,
    ModalComponent
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
