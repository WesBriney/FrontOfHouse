import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Artist Tour', component: ArtistTourPage },
      { title: 'Artist Tour Detail', component: ArtistTourDetailPage },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Edit Tour Date', component: EditTourDatePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'New Artist', component: NewArtistPage },
      { title: 'New Artist Tour', component: NewArtistTourPage },
      { title: 'New Tour Date', component: NewTourDatePage },
      { title: 'Signup', component: SignupPage },
      { title: 'View Tour Date', component: ViewTourDatePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
