import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { AdMob } from 'ionic-native';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    constructor(private platform: Platform,public navCtrl: NavController) {
      platform.ready().then(() => {



          var testId = 'ca-app-pub-6937425280917661/1053575230';
          var productionId = 'ca-app-pub-6937425280917661/1053575230';
          AdMob.createBanner({
              adId: productionId,
              adSize: 'SMART_BANNER',
              isTesting: true
          }).then(() => {
              AdMob.showBanner(2);
          });

      });
  }
  openLink() {
      window.open('https://www.utsc.utoronto.ca/aacc/sites/utsc.utoronto.ca.aacc/files/tipsheets/Academic_Advising_Tipsheets/howtocalculateyourGPA.pdf');
  }
}
