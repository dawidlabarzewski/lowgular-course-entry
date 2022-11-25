import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {CreateEmployeeModel} from "../model/create-employee.model";
import {ApiResponse} from "./api.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('https://eqsfaxnghe.cfolks.pl/assets/data/people.json');
  }

  create(employee: CreateEmployeeModel): Observable<ApiResponse<CreateEmployeeModel>> {
    // return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void(0)));
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee)
      .pipe(map((response: any) => response));
  }
}
