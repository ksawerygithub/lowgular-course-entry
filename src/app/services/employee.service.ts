import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json')
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete
    (`https://dummy.restapiexample.com/api/v1/delete/`+ id).pipe(map(()=>void 0));
  }
}
