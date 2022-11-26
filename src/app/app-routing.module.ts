import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './ui/employee-list/employee-list.component';
import {EmployeeCreateFormComponent} from './ui/employee-create-form/employee-create-form.component';
import {HomeComponent} from './ui/home/home.component';
import {EmployeeDetailsComponent} from './ui/employee-details/employee-details.component';
import {EmployeeListComponentModule} from './ui/employee-list/employee-list.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {EmployeeCreateFormComponentModule} from './ui/employee-create-form/employee-create-form.component-module';
import {HomeComponentModule} from './ui/home/home.component-module';
import {EmployeeDetailsComponentModule} from './ui/employee-details/employee-details.component-module';

const routes: Routes = [{
  path: 'employee-list',
  component: EmployeeListComponent
}, {
  path: 'create-employee',
  component: EmployeeCreateFormComponent
}, {
  path: '',
  component: HomeComponent
}, {
  path: 'employee-details/:id',
  component: EmployeeDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeServiceModule, EmployeeCreateFormComponentModule, HomeComponentModule, EmployeeDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
