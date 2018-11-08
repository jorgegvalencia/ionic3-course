import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { HeroFormPage } from '../pages/hero-form/hero-form';
import { HeroServiceProvider } from '../providers/heroservice/heroservice';
import { BeersProvider } from '../providers/beers/beers';
import { HttpClientModule } from '@angular/common/http';
import { BeersDetailPage } from '../pages/beers-detail/beers-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroFormPage,
    BeersDetailPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeroFormPage,
    BeersDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroServiceProvider,
    BeersProvider
  ]
})
export class AppModule {}
