import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistTourPage } from './artist-tour';

@NgModule({
  declarations: [
    ArtistTourPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistTourPage),
  ],
})
export class ArtistTourPageModule {}
