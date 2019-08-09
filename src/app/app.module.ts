import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { UserServiceProvider } from '../providers/user-service';
import {LoginPage} from './login/login.page';
import  {LoginPageModule} from'./login/login.module';
import { PrincipalPageModule } from './principal/principal.module';
import { DetalleProductoPage } from './detalle-producto/detalle-producto.page';
import { DetalleProductoPageModule } from './detalle-producto/detalle-producto.module';
import { FacturaPage } from './factura/factura.page';
import { FacturaPageModule } from './factura/factura.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    LoginPage,
    DetalleProductoPage,
    FacturaPage
    
  ],
  imports: [BrowserModule,
            HttpClientModule, 
            LoginPageModule,
            PrincipalPageModule,
            DetalleProductoPageModule,
            FacturaPageModule,
            IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    UserServiceProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
