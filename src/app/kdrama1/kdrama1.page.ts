import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kdrama1',
  templateUrl: './kdrama1.page.html',
  styleUrls: ['./kdrama1.page.scss'],
})
export class Kdrama1Page implements OnInit {

  constructor(public router:Router) { }

  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
