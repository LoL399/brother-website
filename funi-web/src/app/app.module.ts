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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntropageComponent,
    NavComponentComponent,
    FooterComponentComponent,
    ProductPageComponent,
    ItemPageComponent
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
