import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  
  contacts$: Observable<Contact[]>;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
      this.getContacts();
  }

  getContacts() {
     return this.contacts$ = this.contactService.getContacts();
  }

}
