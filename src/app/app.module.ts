import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireDatabase } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDTKjf_mN1v07gaihx05YTUHfBqK-85ctg',
  authDomain: 'psangularfire-d95e3.firebaseapp.com',
  databaseURL: 'https://psangularfire-d95e3.firebaseio.com',
  projectId: 'psangularfire-d95e3',
  storageBucket: 'psangularfire-d95e3.appspot.com',
  messagingSenderId: '221210446186'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
