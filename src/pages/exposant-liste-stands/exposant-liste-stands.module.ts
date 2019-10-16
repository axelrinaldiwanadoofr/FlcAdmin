import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExposantListeStandsPage } from './exposant-liste-stands';

@NgModule({
  declarations: [
    ExposantListeStandsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExposantListeStandsPage),
  ],
})
export class ListeExposantsPageModule {}
