import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-kmovie',
  templateUrl: './home-kmovie.page.html',
  styleUrls: ['./home-kmovie.page.scss'],
})
export class HomeKmoviePage implements OnInit {

  constructor(public router: Router) { }

  goKmovie() {
    this.router.navigate(['/kmovie']);
  }

  goKmovie1() {
    this.router.navigate(['/kmovie1']);
  }

  goKmovie2() {
    this.router.navigate(['/kmovie2']);
  }

  ngOnInit() {
  }

}
