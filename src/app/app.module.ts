import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ArtistTourPage } from '../pages/artist-tour/artist-tour';
import { ArtistTourDetailPage } from '../pages/artist-tour-detail/artist-tour-detail';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { EditTourDatePage } from '../pages/edit-tour-date/edit-tour-date';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { NewArtistPage } from '../pages/new-artist/new-artist';
import { NewArtistTourPage } from '../pages/new-artist-tour/new-artist-tour';
import { NewTourDatePage } from '../pages/new-tour-date/new-tour-date';
import { SignupPage } from '../pages/signup/signup';
import { ViewTourDatePage } from '../pages/view-tour-date/view-tour-date';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ArtistTourPage,
    ArtistTourDetailPage,
    DashboardPage,
    EditTourDatePage,
    ListPage,
    LoginPage,
    NewArtistPage,
    NewArtistTourPage,
    NewTourDatePage,
    SignupPage,
    ViewTourDatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ArtistTourPage,
    ArtistTourDetailPage,
    DashboardPage,
    EditTourDatePage,
    ListPage,
    LoginPage,
    NewArtistPage,
    NewArtistTourPage,
    NewTourDatePage,
    SignupPage,
    ViewTourDatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
