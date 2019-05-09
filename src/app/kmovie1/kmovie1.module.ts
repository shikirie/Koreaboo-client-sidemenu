import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Kmovie1Page } from './kmovie1.page';

const routes: Routes = [
  {
    path: '',
    component: Kmovie1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Kmovie1Page]
})
export class Kmovie1PageModule {}
