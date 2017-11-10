import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../../models/company.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

    isNewCompany: boolean;
    companyKey: string;
    company$: FirebaseObjectObservable<Company>;
    constructor(private companyService: CompanyService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.companyKey = this.route.snapshot.params['id']
        this.isNewCompany = this.companyKey === 'new';
        if (!this.isNewCompany) { this.getCompanyById() }
    }

    getCompanyById() {
        this.company$ = this.companyService.getCompanyById(this.companyKey);
    }

    saveCompany(company) {
        this.companyService.saveCompany(company);
    }

    updateCompany(company) {
        this.companyService.updateCompany(company);
    }

    deleteCompany(company) {
        this.companyService.deleteCompany(company);
    }

}
