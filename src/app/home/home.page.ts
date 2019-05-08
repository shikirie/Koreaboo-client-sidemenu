import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor (public router : Router) {}

  goKdrama() {
    this.router.navigate(['/kdrama']);
  }

  goKdrama1() {
    this.router.navigate(['/kdrama1']);
  }

  goKdrama2() {
    this.router.navigate(['/kdrama2']);
  }

}
