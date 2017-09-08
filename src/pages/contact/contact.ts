import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  emailUs() {
    window.location.href = 'mailto:undocuhacks2017@undocumedia.org';
  }

}
