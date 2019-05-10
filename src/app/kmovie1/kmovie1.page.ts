import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kmovie1',
  templateUrl: './kmovie1.page.html',
  styleUrls: ['./kmovie1.page.scss'],
})
export class Kmovie1Page implements OnInit {

  constructor(public router: Router) { }

  goHomeKmovie() {
    this.router.navigate(['/home-kmovie']);
  }

  ngOnInit() {
  }

}
