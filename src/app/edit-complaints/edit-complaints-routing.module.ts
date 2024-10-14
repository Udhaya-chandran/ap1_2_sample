import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComplaintsPage } from './edit-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: EditComplaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditComplaintsPageRoutingModule {}
