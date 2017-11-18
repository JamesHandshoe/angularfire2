import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../../models/company.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {

  companies: Array<Company>
  displayedColumns = ['name', 'phone']
  dataSource: CompanyDataSource | null;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
      this.companyService.getCompanies().subscribe(companies => {
          this.dataSource = new CompanyDataSource(companies);
      })
  }
}

export class CompanyDataSource extends DataSource<any> implements OnInit {
  
  constructor(private companies: Company[]) {
      super();
  }

  ngOnInit() {}
  
  connect(): Observable<Company[]> {
      console.log(this.companies);
      return Observable.of(this.companies);
  }

  disconnect() {}
}



