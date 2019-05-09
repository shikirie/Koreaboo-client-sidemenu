import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kpop2',
  templateUrl: './kpop2.page.html',
  styleUrls: ['./kpop2.page.scss'],
})
export class Kpop2Page implements OnInit {

  constructor(public router: Router) { }

  goHomePop() {
    this.router.navigate(['/home-kpop']);
  }

  ngOnInit() {
  }

}
