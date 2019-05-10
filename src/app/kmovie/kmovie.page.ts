import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kmovie',
  templateUrl: './kmovie.page.html',
  styleUrls: ['./kmovie.page.scss'],
})
export class KmoviePage implements OnInit {

  constructor(public router: Router) { }

  goHomeKmovie() {
    this.router.navigate(['/home-kmovie']);
  }

  ngOnInit() {
  }

}
