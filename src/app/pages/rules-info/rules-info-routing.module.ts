import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RulesInfoPage } from './rules-info.page';

const routes: Routes = [
  {
    path: '',
    component: RulesInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RulesInfoPageRoutingModule {}
