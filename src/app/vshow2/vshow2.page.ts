import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vshow2',
  templateUrl: './vshow2.page.html',
  styleUrls: ['./vshow2.page.scss'],
})
export class Vshow2Page implements OnInit {

  constructor(public router: Router) { }

  goHomeVshow() {
    this.router.navigate(['/home-vshow']);
  }
  ngOnInit() {
  }

}
