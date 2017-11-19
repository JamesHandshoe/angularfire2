import { Component, OnInit, Injector } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../../models/contact.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

export class ContactDataSource extends DataSource<any> implements OnInit {
    
    contacts: Array<Contact>;
    contactService;
    constructor(protected injector: Injector) {
        super();
        this.contactService = injector.get(ContactService);        
    }

    ngOnInit() {
        this.contactService.getContacts().subscribe((contacts) => {
            this.contacts = contacts;
            console.log(this.contacts);
        });
    }
    
    connect(): Observable<Contact[]> {
        return Observable.of(this.contacts);
    }

    disconnect() {}
}