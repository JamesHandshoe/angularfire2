import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../models/contact.model';
import { CompanyService } from '../../company/services/company.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  
    companies: Company[];
    contacts$: Observable<Contact[]>;
    companyPlaceholder: string = "Sort by Company";
    initialSelectState: string = "All Companies";
    constructor(private contactService: ContactService,
                private companyService: CompanyService) { }

    ngOnInit() {
        this.getContacts();
        this.companyService.getCompanies().subscribe(data => {
            this.companies = data;
        });
    }

    getContacts() {
        this.contacts$ = this.contactService.getContacts();
    }

    sortContacts(companyKey: string) {
        this.contactService.companySubject$.next(companyKey);
    }

}
