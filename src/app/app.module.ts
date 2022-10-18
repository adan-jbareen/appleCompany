import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IphoneComponent } from './components/iphone/iphone.component';
import { IpadComponent } from './components/ipad/ipad.component';
import { IpodComponent } from './components/ipod/ipod.component';
import { MacintoshComponent } from './components/macintosh/macintosh.component';
import { WatchComponent } from './components/watch/watch.component';
import { TvComponent } from './components/tv/tv.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsIphoneComponent } from './components/products-iphone/products-iphone.component';
import { ProductsIpadComponent } from './components/products-ipad/products-ipad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IphoneComponent,
    IpadComponent,
    IpodComponent,
    MacintoshComponent,
    WatchComponent,
    TvComponent,
    FooterComponent,
    ProductsIphoneComponent,
    ProductsIpadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
