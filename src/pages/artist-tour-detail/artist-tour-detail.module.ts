import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistTourDetailPage } from './artist-tour-detail';

@NgModule({
  declarations: [
    ArtistTourDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistTourDetailPage),
  ],
})
export class ArtistTourDetailPageModule {}
