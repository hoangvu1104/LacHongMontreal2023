import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RulesInfoPageRoutingModule } from './rules-info-routing.module';

import { RulesInfoPage } from './rules-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RulesInfoPageRoutingModule
  ],
  declarations: []
})
export class RulesInfoPageModule { }
