import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vshow1',
  templateUrl: './vshow1.page.html',
  styleUrls: ['./vshow1.page.scss'],
})
export class Vshow1Page implements OnInit {

  constructor(public router: Router) { }

  goHomeVshow() {
    this.router.navigate(['/home-vshow']);
  }
  
  ngOnInit() {
  }

}
