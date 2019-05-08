import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Kdrama1Page } from './kdrama1.page';

const routes: Routes = [
  {
    path: '',
    component: Kdrama1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Kdrama1Page]
})
export class Kdrama1PageModule {}
