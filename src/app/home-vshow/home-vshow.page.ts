import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-vshow',
  templateUrl: './home-vshow.page.html',
  styleUrls: ['./home-vshow.page.scss'],
})
export class HomeVshowPage implements OnInit {

  constructor(public router: Router) { }

  goVshow() {
    this.router.navigate(['/vshow']);
  }

  goVshow1() {
    this.router.navigate(['/vshow1']);
  }

  goVshow2() {
    this.router.navigate(['/vshow2']);
  }
  ngOnInit() {
  }

}
