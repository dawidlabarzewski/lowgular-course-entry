import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../model/person.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from '../model/employee.response';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => ({
            name: employeeResponse.employee_name,
            personalNumber: employeeResponse.id,
            img: employeeResponse.profile_image,
            mail: `${employeeResponse.employee_name}@lowgular.io`
          }))
        })
      );
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`).pipe(map(_ => void 0));
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));
  }

  getOne(id: string): Observable<PersonModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .pipe(
        map((response: ApiResponse<EmployeeResponse>): PersonModel => {
          return {
            name: response.data.employee_name,
            personalNumber: response.data.id,
            img: response.data.profile_image,
            mail: `${response.data.employee_name}@lowgular.io`
          }}
        )
      );
  }
}
