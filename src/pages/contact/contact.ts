import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }

  emailUs() {
    this.iab.create('mailto:undocuhacks2017@undocumedia.org');
  }

  twitter() {
    this.iab.create('http://twitter.com/undocumedia');
  }

  facebook() {
    this.iab.create('http://facebook.com/undocumedia');
  }

}
