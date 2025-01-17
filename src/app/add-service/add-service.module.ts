import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddServicePageRoutingModule } from './add-service-routing.module';

import { AddServicePage } from './add-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddServicePageRoutingModule
  ],
  declarations: [AddServicePage],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class AddServicePageModule {}
