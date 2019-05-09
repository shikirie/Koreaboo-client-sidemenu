import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kdrama',
  templateUrl: './kdrama.page.html',
  styleUrls: ['./kdrama.page.scss'],
})
export class KdramaPage implements OnInit {

  constructor(public router:Router) { }

  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
