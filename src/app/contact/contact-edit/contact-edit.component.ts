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
    contact = {name: ''} as Contact;
    companies: Company[];
    selectedCompany: Company;
    contactCompanies = [];

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
        if (!this.isNewContact) { this.getContactById() }; 
        if (this.isNewContact) {
            this.setContactCompanies();
            this.headerMessage = "New Contact";
        }
    }

    getContactById() {
        this.contactService.getContactById(this.contactKey)
            .subscribe(contact => {
                this.contact = contact;
                this.setContactCompanies();
            });
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
        console.log(contact);
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

    setContactCompanies() {
        if (this.contact.contactCompanies == null) { this.contact.contactCompanies = {} };
        this.contactCompanies = Object.keys(this.contact.contactCompanies)
            .map(key => this.contact.contactCompanies[key]);
    }

    addCompany() {
        this.contact.contactCompanies[this.selectedCompany.$key] = { name: this.selectedCompany.name };
        this.setContactCompanies();
    }
}
