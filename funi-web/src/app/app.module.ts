import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { IntropageComponent } from './page/intropage/intropage.component';
import { NavComponentComponent } from './component/nav-componentt/nav-component.component';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntropageComponent,
    NavComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
