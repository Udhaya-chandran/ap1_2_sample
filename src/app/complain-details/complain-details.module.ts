import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplainDetailsPageRoutingModule } from './complain-details-routing.module';

import { ComplainDetailsPage } from './complain-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplainDetailsPageRoutingModule
  ],
  declarations: [ComplainDetailsPage]
})
export class ComplainDetailsPageModule {}
