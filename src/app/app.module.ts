import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatInputModule, MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

import 'hammerjs';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/services/company.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CompanyListComponent } from './company/company-list/company-list.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDTKjf_mN1v07gaihx05YTUHfBqK-85ctg',
  authDomain: 'psangularfire-d95e3.firebaseapp.com',
  databaseURL: 'https://psangularfire-d95e3.firebaseio.com',
  projectId: 'psangularfire-d95e3',
  storageBucket: 'psangularfire-d95e3.appspot.com',
  messagingSenderId: '221210446186'
};

const materialModules = [    
  MatMenuModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ...materialModules,
    AppRoutingModule
  ],
  providers: [
    AngularFireDatabase,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
