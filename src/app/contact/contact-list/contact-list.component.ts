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
    constructor(private contactService: ContactService,
                private companyService: CompanyService) { }

    ngOnInit() {
        this.getContacts();
        this.companyService.getCompanies().subscribe(data => {
            this.companies = data;
        });
    }

    getContacts(companyKey?: string) {
      return this.contacts$ = this.contactService.getContacts(companyKey);
    }

}
