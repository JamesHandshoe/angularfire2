import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../../models/company.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

    isNewCompany: boolean;
    companyKey: string;
    company$: Observable<Company>;
    
    constructor(private companyService: CompanyService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.companyKey = this.route.snapshot.params['id']
        this.isNewCompany = this.companyKey === 'new';
        !this.isNewCompany ? this.getCompanyById() : this.company$ = Observable.of({}) as FirebaseObjectObservable<Company>; 
    }

    getCompanyById() {
        this.company$ = this.companyService.getCompanyById(this.companyKey);
    }

    saveCompany(company) {
        this.companyService.saveCompany(company)
            .then(() => {
                this.router.navigate(['company-list'])
            });
    }

    updateCompany(company) {
        this.companyService.updateCompany(company)
            .then(() => {
                this.router.navigate(['company-list'])
            });
    }

    deleteCompany(company) {
        this.companyService.deleteCompany(company)
            .then(() => {
                this.router.navigate(['company-list']);
            });
    }

}
