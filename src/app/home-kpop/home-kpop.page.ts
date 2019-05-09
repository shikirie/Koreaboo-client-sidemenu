import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-kpop',
  templateUrl: './home-kpop.page.html',
  styleUrls: ['./home-kpop.page.scss'],
})
export class HomeKpopPage implements OnInit {

  constructor(public router:Router) { }

  goBP() {
    this.router.navigate(['/kpop']);
  }

  goRV() {
    this.router.navigate(['/kpop1'])
  }

  goMM() {
    this.router.navigate(['/kpop2'])
  }

  ngOnInit() {
  }

}
