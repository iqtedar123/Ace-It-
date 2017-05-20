import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    constructor(public navCtrl: NavController) {
        
    }
    //const browser = this.iab.create('https://www.facebook.com/TechMeister786/?view_public_for=697666376935125');
    //openFacebookPage() {
    //    browser.open();
    //}
    openTwitter() {
        window.open('https://twitter.com/iQtedar_C');
    }
}
