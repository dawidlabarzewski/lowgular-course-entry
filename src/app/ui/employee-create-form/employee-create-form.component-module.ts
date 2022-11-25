import { NgModule } from '@angular/core';
import { EmployeeCreateFormComponent } from './employee-create-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [EmployeeCreateFormComponent],
  providers: [],
  exports: [EmployeeCreateFormComponent]
})
export class EmployeeCreateFormComponentModule {
}
