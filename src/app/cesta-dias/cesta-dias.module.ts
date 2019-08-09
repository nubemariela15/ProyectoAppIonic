import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CestaDiasPage } from './cesta-dias.page';

const routes: Routes = [
  {
    path: '',
    component: CestaDiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CestaDiasPage]
})
export class CestaDiasPageModule {}
