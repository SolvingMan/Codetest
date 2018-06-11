import { Component } from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private alertCtrl: AlertController) {

  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Congratulations',
      buttons: ['Dismiss']
    });
    alert.present();

  }
}
