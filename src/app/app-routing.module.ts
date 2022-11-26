import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeCreateFormComponent } from './ui/employee-create-form/employee-create-form.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeCreateFormComponentModule } from './ui/employee-create-form/employee-create-form.component-module';
import {HomeComponent} from "./ui/home/home.component";
import {HomeComponentModule} from "./ui/home/home.component-module";

const routes: Routes = [{ path: 'employee-list', component: EmployeeListComponent }, { path: 'create-employee', component: EmployeeCreateFormComponent }, { path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeServiceModule, EmployeeCreateFormComponentModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
