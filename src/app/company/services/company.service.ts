import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
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

    saveCompany(company: Company) {
        return this.companies$.push(company)
          .then(_ => console.log('success'))
          .catch(error => console.log(error));
    }

    updateCompany(company: Company) {
        //update will only update the specific property
        //on the firebase object
        return this.companies$.update(company.$key, company)
            .then(() => console.log('success'))
            .catch(this.errorHandler);
    }

    deleteCompany(company) {
        return this.companies$.remove(company.$key)
            .then(() => console.log('success'))
            .catch(error => console.log(error));
    }

    getCompanies(): Observable<Company[]> {
        return this.companies$
            .catch(this.errorHandler);
    }

    getCompanyById(companyKey: string) {
        return this.af.object(`companies/${companyKey}`)
            .catch(this.errorHandler);
    }

    private errorHandler(error) {
        console.log(error);
        return Observable.throw(error);
    }
}
