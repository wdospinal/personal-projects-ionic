import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCT_JcNuLP0N947hKlbI56lVznRKggxxkI',
  authDomain: 'personalprojectsshared.firebaseapp.com',
  databaseURL: 'https://personalprojectsshared.firebaseio.com',
  projectId: 'personalprojectsshared',
  storageBucket: 'personalprojectsshared.appspot.com',
  messagingSenderId: '31449931878'
};

@NgModule({
  exports: [
    AddProjectComponent,
  ],
  declarations: [
    MyApp,
    ProjectComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddProjectComponent,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
