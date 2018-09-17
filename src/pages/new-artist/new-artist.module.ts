import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewArtistPage } from './new-artist';

@NgModule({
  declarations: [
    NewArtistPage,
  ],
  imports: [
    IonicPageModule.forChild(NewArtistPage),
  ],
})
export class NewArtistPageModule {}
