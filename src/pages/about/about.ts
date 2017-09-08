import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  partners:any[];

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
    this.partners = [
      {
        logo: 'lchc_logo.jpg',
        url: 'http://lchc.org'
      },
      {
        logo: 'fwdus_logo.jpg',
        url: 'http://drc_logo.jpg'
      },
      {
        logo: 'drc_logo.jpg',
        url: 'https://www.labor.ucla.edu/what-we-do/dream-resource-center/'
      },
      {
        logo: 'codesmith_logo.jpg',
        url: 'https://www.codesmith.io/'
      },
      {
        logo: 'univision.jpg',
        url: 'http://univision.com'
      },
      {
        logo: 'fusion.jpg',
        url: 'fusion.com'
      },
      {
        logo: 'miMentor1.jpg',
        url: 'https://www.mimentor.org/'
      },
      {
        logo: '211.jpg',
        url: 'https://www.211la.org/'
      }

    ]
  }

  visitLink(url) {
    this.iab.create(url);
  }

}
