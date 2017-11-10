import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs/Observable';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  
  companies$: Observable<Company[]>;
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
      this.getCompanies();
  }

  getCompanies() {
      this.companies$ = this.companyService.getCompanies();
  }

}
