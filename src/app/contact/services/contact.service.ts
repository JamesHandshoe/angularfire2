import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Contact } from '../../models/contact.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ContactService {

    companySubject$ = new BehaviorSubject<string>(undefined);
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
        // multipath update
        // in this object the properties should contain all the 
        // paths needed to be updated.
        let removeContact = {}; 

        removeContact[`contacts/${contact.$key}`] = contact;
        Object.keys(contact.contactCompanies).forEach(companyKey => {
            removeContact[`companyContacts/${companyKey}/${contact.$key}`] = true;
        });

        //update will only update the specific property
        //on the firebase object
        // return this.contacts$.update(contact.$key, contact)
        //     .then(() => console.log('success'))
        //     .catch(this.errorHandler);

        // multipath update example
        return this.db.object('/').update(removeContact)
            .then(() => console.log('success'))
            .catch(this.errorHandler);
    }

    deleteContact(contact) {

        // multipath delete
        // in this object the properties should contain all the 
        // paths needed to be deleted.
        let updateContact = {}; 
        
        updateContact[`contacts/${contact.$key}`] = null;
        Object.keys(contact.contactCompanies).forEach(companyKey => {
            updateContact[`companyContacts/${companyKey}/${contact.$key}`] = null;
        });

        // multipath delete example
        return this.db.object('/').update(updateContact)
            .then(() => console.log('success'))
            .catch(this.errorHandler);

        // way to remove one contact.  However, doesn't
        // remove all references and remaining data of the contact.
        // return this.contacts$.remove(contact.$key)
        //     .then(() => console.log('success'))
        //     .catch(error => console.log(error));
    }

    getContacts(): Observable<Contact[]> {
        return this.db.list('contacts', {
            query: {
                orderByChild: 'companyKey',
                equalTo: this.companySubject$
            }
        })
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
