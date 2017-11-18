import { Component, OnInit, Injector } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../../models/company.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

export class CompanyDataSource extends DataSource<any> implements OnInit {
    
    companies: Array<Company>;
    companyService;
    constructor(protected injector: Injector) {
        super();
        this.companyService = injector.get(CompanyService);        
    }

    ngOnInit() {
        this.companyService.getCompanies().subscribe((companies) => {
            this.companies = companies;
            console.log(this.companies);
        });
    }
    
    connect(): Observable<Company[]> {
        return Observable.of(this.companies);
    }

    disconnect() {}
}