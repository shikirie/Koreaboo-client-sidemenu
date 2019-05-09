import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kdrama2',
  templateUrl: './kdrama2.page.html',
  styleUrls: ['./kdrama2.page.scss'],
})
export class Kdrama2Page implements OnInit {

  constructor(public router : Router) { }

  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
