import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kmovie2',
  templateUrl: './kmovie2.page.html',
  styleUrls: ['./kmovie2.page.scss'],
})
export class Kmovie2Page implements OnInit {

  constructor(public router: Router) { }

  goHomeKmovie() {
    this.router.navigate(['/home-kmovie']);
  }
  ngOnInit() {
  }

}
