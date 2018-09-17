import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTourDatePage } from './edit-tour-date';

@NgModule({
  declarations: [
    EditTourDatePage,
  ],
  imports: [
    IonicPageModule.forChild(EditTourDatePage),
  ],
})
export class EditTourDatePageModule {}
