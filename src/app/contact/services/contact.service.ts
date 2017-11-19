import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Contact } from '../../models/contact.model';

@Injectable()
export class ContactService {

    contacts$: FirebaseListObservable<Contact[]>;
    contact$: FirebaseObjectObservable<Contact>;
    af: AngularFireDatabase

    constructor(private db: AngularFireDatabase) {
        this.af = this.db;
        this.contact$ = this.db.object('contact');
        this.contacts$ = this.db.list('contacts');
    }

    saveContact(contact: Contact) {
        return this.contacts$.push(contact)
          .then(_ => console.log('success'))
          .catch(error => console.log(error));
    }

    updateContact(contact: Contact) {
        //update will only update the specific property
        //on the firebase object
        return this.contacts$.update(contact.$key, contact)
            .then(() => console.log('success'))
            .catch(this.errorHandler);
    }

    deleteContact(contact) {
        return this.contacts$.remove(contact.$key)
            .then(() => console.log('success'))
            .catch(error => console.log(error));
    }

    getContacts(): Observable<Contact[]> {
        return this.contacts$
            .catch(this.errorHandler);
    }

    getContactById(contactKey: string) {
        return this.af.object(`contacts/${contactKey}`)
            .catch(this.errorHandler);
    }

    private errorHandler(error) {
        console.log(error);
        return Observable.throw(error);
    }
}
