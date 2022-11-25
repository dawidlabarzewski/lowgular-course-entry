import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Observable } from "rxjs";
import { PersonModel } from "../../model/person.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {
  }

  delete(id: string) {
    this._employeeService.delete(id).subscribe({
      next(x) {
        alert('User was successfully removed');
      }
    });
  }
}
