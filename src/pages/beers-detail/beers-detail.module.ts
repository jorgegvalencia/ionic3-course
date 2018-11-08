import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeersDetailPage } from './beers-detail';

@NgModule({
  declarations: [
    BeersDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BeersDetailPage),
  ],
})
export class BeersDetailPageModule {}
