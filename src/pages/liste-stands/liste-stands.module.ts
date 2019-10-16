import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeStandsPage } from './liste-stands';

@NgModule({
  declarations: [
    ListeStandsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeStandsPage),
  ],
})
export class ListeExposantsPageModule {}
