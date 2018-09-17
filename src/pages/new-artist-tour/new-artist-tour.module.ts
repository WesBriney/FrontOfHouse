import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewArtistTourPage } from './new-artist-tour';

@NgModule({
  declarations: [
    NewArtistTourPage,
  ],
  imports: [
    IonicPageModule.forChild(NewArtistTourPage),
  ],
})
export class NewArtistTourPageModule {}
