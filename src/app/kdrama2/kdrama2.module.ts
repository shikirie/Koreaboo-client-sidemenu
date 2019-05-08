import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Kdrama2Page } from './kdrama2.page';

const routes: Routes = [
  {
    path: '',
    component: Kdrama2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Kdrama2Page]
})
export class Kdrama2PageModule {}
