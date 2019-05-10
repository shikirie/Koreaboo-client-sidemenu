import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vshow',
  templateUrl: './vshow.page.html',
  styleUrls: ['./vshow.page.scss'],
})
export class VshowPage implements OnInit {

  constructor(public router: Router) { }

  goHomeVshow() {
    this.router.navigate(['/home-vshow']);
  }
  
  ngOnInit() {
  }

}
