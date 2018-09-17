import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTourDatePage } from './new-tour-date';

@NgModule({
  declarations: [
    NewTourDatePage,
  ],
  imports: [
    IonicPageModule.forChild(NewTourDatePage),
  ],
})
export class NewTourDatePageModule {}
