import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AddProjectComponent } from '../add/add-project.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public modalCtrl: ModalController) {
    this.items = db.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
  }

  openModal() {
    let profileModal = this.modalCtrl.create(AddProjectComponent);
    profileModal.onDidDismiss(project => {
       this.items.push(project);
    });
    profileModal.present();
  }

  changeLike(event) {
    const likes = event.likes + 1;
    this.items.update(event.$key, { likes: likes });
  }
}
