import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private statusBar: StatusBar) {

    this.statusBar.backgroundColorByHexString('#17161f');
  }

  openTaskPage() {
    this.navCtrl.push('TasklistPage');
  }
}
