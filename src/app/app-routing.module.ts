import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactTableComponent } from './contact/contact-table/contact-table.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'company-list' },
    { path: 'company-list', component: CompanyListComponent },
    { path: 'company-table', component: CompanyTableComponent },    
    { path: 'company-edit/:id', component: CompanyEditComponent },
    { path: 'contact-list', component: ContactListComponent },
    { path: 'contact-table', component: ContactTableComponent },    
    { path: 'contact-edit/:id', component: ContactEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}