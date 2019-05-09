import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kpop1',
  templateUrl: './kpop1.page.html',
  styleUrls: ['./kpop1.page.scss'],
})
export class Kpop1Page implements OnInit {

  constructor(public router: Router) { }

  goHomePop() {
    this.router.navigate(['/home-kpop']);
  }

  ngOnInit() {
  }

}
