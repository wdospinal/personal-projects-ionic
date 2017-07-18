import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.items = db.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
  }
}
