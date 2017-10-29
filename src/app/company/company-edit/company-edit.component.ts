import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  
  company$;
  constructor(private companyService: CompanyService) {
      this.company$ = this.companyService.company$;
  }

  ngOnInit() {
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
