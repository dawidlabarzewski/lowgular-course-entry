import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeService} from "../../services/employee.service";
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-employee-faces',
  templateUrl: './employee-faces.component.html',
  styleUrls: ['./employee-faces.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFacesComponent {
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {
  }
}
