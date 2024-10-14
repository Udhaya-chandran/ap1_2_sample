import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplainDetailsPage } from './complain-details.page';

const routes: Routes = [
  {
    path: '',
    component: ComplainDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplainDetailsPageRoutingModule {}
