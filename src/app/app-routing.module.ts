import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule',
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
  },
  { path: '', redirectTo: '/department-list', pathMatch: 'full' },
  { path: 'department-list', component: DepartmentListComponent },
  {
    path: 'department-list/:id',
    component: DepartmentDetailsComponent,
    children: [
      { path: 'department-overview', component: DepartmentOverviewComponent },
      { path: 'department-contact', component: DepartmentContactComponent },
    ],
  },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
