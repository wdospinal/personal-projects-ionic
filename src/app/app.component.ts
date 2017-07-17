import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  items: FirebaseListObservable<any[]>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public db: AngularFireDatabase,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.items = db.list('/messages', {
        query: {
          limitToLast: 50
        }
      });
    });
  }
}

