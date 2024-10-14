import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditComplaintsPageRoutingModule } from './edit-complaints-routing.module';

import { EditComplaintsPage } from './edit-complaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditComplaintsPageRoutingModule
  ],
  declarations: [EditComplaintsPage]
})
export class EditComplaintsPageModule {}
