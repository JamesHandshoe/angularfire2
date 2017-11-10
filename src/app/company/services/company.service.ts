import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { Company } from '../../models/company.model';

@Injectable()
export class CompanyService {

    companies$: FirebaseListObservable<Company[]>;
    company$: FirebaseObjectObservable<Company>;
    af: AngularFireDatabase

    constructor(private db: AngularFireDatabase) {
        this.af = this.db;
        this.company$ = this.db.object('company');
        this.companies$ = this.db.list('companies');
    }

    ngOnInit() {
    }

    newCompany() {
        
    }
    saveCompany(company: Company) {
        //set is a destructive update - it will overwrite
        Observable.fromPromise(this.companies$.push(company)
            .catch(error => Observable.throw(error))
        );
    }

    updateCompany(company: Company) {
        //update will only update the specific property
        //on the firebase object
        Observable.fromPromise(this.companies$.update(company.$key, { phone: 123 })
            .catch(error => Observable.throw(error))
        );
    }

    deleteCompany(company) {
        this.company$.remove();
    }

    getCompanies(): Observable<Company[]> {
        return this.companies$;
    }

    getCompanyById(companyKey: string) {
        return this.af.object(`companies/${companyKey}`);
    }
}
