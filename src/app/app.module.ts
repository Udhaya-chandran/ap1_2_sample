import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import {Drivers} from '@ionic/storage'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule,BrowserModule, IonicStorageModule.forRoot(),IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [HttpClient,importProvidersFrom(IonicStorageModule.forRoot({
    name:'login',
    driverOrder:[Drivers.LocalStorage]
  })
  ),
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
