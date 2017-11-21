import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatInputModule, MatToolbarModule, MatCardModule, MatButtonModule, MatTableModule } from '@angular/material';

import 'hammerjs';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/services/company.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { ContactService } from './contact/services/contact.service';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactTableComponent } from './contact/contact-table/contact-table.component';
import { HeaderComponent } from './components/header/header.component';

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
  MatCardModule,
  MatTableModule,
  MatMenuModule
]

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent,
    CompanyTableComponent,
    ContactEditComponent,
    ContactListComponent,
    ContactTableComponent,
    HeaderComponent
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
    CompanyService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
