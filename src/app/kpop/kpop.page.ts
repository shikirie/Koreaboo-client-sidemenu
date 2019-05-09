import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kpop',
  templateUrl: './kpop.page.html',
  styleUrls: ['./kpop.page.scss'],
})
export class KpopPage implements OnInit {

  constructor(public router : Router) { }

  goHomePop() {
    this.router.navigate(['/home-kpop']);
  }

  ngOnInit() {
  }

}
