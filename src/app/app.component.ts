import { Component } from '@angular/core';

import { Platform, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AccPopoverComponent } from './acc-popover/acc-popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'K-Drama',
      url: '/home',
      icon: 'md-home'
    },
    {
      title: 'K-Pop',
      url: '/home-kpop',
      icon: 'md-musical-notes'
    },
    {
      title: 'K-Movie',
      url: '/home-kmovie',
      icon: 'videocam'
    },
    {
      title: 'Variety Show',
      url: '/home-vshow',
      icon: 'videocam'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public popoverController : PopoverController,
    public router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentPopover(event){
    const popover = await this.popoverController.create({
      component:AccPopoverComponent,
      event
    });
    return await popover.present();
  }

}
