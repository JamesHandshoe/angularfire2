import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../../models/contact.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss']
})
export class ContactTableComponent implements OnInit {

  contacts: Array<Contact>
  displayedColumns = ['name', 'phone']
  dataSource: ContactDataSource | null;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
      this.contactService.getContacts().subscribe(contacts => {
          this.dataSource = new ContactDataSource(contacts);
      })
  }
}

export class ContactDataSource extends DataSource<any> implements OnInit {
  
  constructor(private contacts: Contact[]) {
      super();
  }

  ngOnInit() {}
  
  connect(): Observable<Contact[]> {
      console.log(this.contacts);
      return Observable.of(this.contacts);
  }

  disconnect() {}
}



