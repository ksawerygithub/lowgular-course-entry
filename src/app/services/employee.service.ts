import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees',).pipe(
    map((response: ApiResponse<EmployeeResponse[]>) => {
      return response.data.map((EmployeeResponse: EmployeeResponse) => {
        return {
          personalNumber: EmployeeResponse.id,
          name: EmployeeResponse.employee_name,
          mail: (EmployeeResponse.employee_name + "@angular.io"),
          img: EmployeeResponse.profile_image
        }
      });
    })
    )
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete
    (`https://dummy.restapiexample.com/api/v1/delete/`+ id).pipe(map(()=>void 0));
  }


}
