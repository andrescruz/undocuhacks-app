import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValuesPage } from './values';

@NgModule({
  declarations: [
    ValuesPage,
  ],
  imports: [
    IonicPageModule.forChild(ValuesPage),
  ],
})
export class ValuesPageModule {}
