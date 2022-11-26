import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EmployeeDetailsParamsModel } from '../../model/employee-details-params.model';
import { PersonModel } from '../../model/person.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  readonly params$: Observable<EmployeeDetailsParamsModel> = this._activatedRoute.params.pipe(map(
    params => ({
      id: params['id']
    })
  ));
  readonly details$: Observable<PersonModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._employeeService.getOne(data['id']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
  }
}
