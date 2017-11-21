import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../../models/contact.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CompanyService } from '../../company/services/company.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

    headerMessage: string = "Edit Contact";
    companyPlaceholder:string = 'Select Company';
    isNewContact: boolean;
    contactKey: string;
    contact$: Observable<Contact>;
    companies: Company[];

    constructor(private contactService: ContactService,
                private companyService: CompanyService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.companyService.getCompanies().subscribe(data => {
            this.companies = data;
        });
        this.contactKey = this.route.snapshot.params['id']
        this.isNewContact = this.contactKey === 'new';
        !this.isNewContact ? this.getContactById() : this.contact$ = Observable.of({}) as FirebaseObjectObservable<Contact>; 
        if (this.isNewContact) {
            this.headerMessage = "New Contact";
        }
    }

    getContactById() {
        this.contact$ = this.contactService.getContactById(this.contactKey);
    }

    saveContact(contact) {
        this.contactService.saveContact(contact)
            .then(() => {
                this.router.navigate(['contact-list'])
            });
    }

    cancel() {
        this.router.navigate(['contact-list'])
    }    

    updateContact(contact) {
        this.contactService.updateContact(contact)
            .then(() => {
                this.router.navigate(['contact-list'])
            });
    }

    deleteContact(contact) {
        this.contactService.deleteContact(contact)
            .then(() => {
                this.router.navigate(['contact-list']);
            });
    }

}
