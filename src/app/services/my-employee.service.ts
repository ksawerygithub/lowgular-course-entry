import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyEmployeeModel } from '../model/my-employee.model';
import { ApiResponse } from './api.response';
import { MyEmployeeResponse } from './my-employee.response';

@Injectable()
export class MyEmployeeService {
  constructor(private _httpClient: HttpClient) {
  }





  getAll(): Observable<MyEmployeeModel[]> {
    return this._httpClient.get<ApiResponse<MyEmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<MyEmployeeResponse[]>) => {
        return response.data.map((MyEmployeeResponse: MyEmployeeResponse) => {
          return {
            number: MyEmployeeResponse.id,
            name: MyEmployeeResponse.employee_name,
            age: MyEmployeeResponse.employee_age,
            salary: MyEmployeeResponse.employee_salary,
            img: MyEmployeeResponse.employee_img
          }
        });
      })
    )
  }

  delete(number: string): Observable<void> {
    return this._httpClient.delete
    ('https://dummy.restapiexample.com/api/v1/delete/' + number).pipe(map(() => void 0));
  }
}
