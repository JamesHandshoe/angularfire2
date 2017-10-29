import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatInputModule, MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/services/company.service';
import { FormsModule } from '@angular/forms';

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
    AppComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot([])
  ],
  providers: [
    AngularFireDatabase,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
