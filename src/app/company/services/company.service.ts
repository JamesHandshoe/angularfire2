import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

@Injectable()
export class CompanyService {

  company$: FirebaseObjectObservable<any>;
  af: AngularFireDatabase
  constructor(private db: AngularFireDatabase) {
      this.af = this.db;
      this.company$ = this.db.object('company');
  }

  ngOnInit() {
  }

  newCompany() {
      
  }
  saveCompany(company) {
      //set is a destructive update - it will overwrite
     Observable.fromPromise(this.company$.set({name: company.name})
         .catch(error => Observable.throw(error))
     );
  }

  updateCompany(company) {
      //update will only update the specific property
      //on the firebase object
      this.company$.update(company);
  }

  deleteCompany(company) {
      this.company$.remove();
  }

}
