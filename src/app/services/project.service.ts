import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { ProjectModel } from '../model/project.model';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class ProjectService {

  constructor(private _httpClient: HttpClient) {

  }
  getAll(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>('assets/data/projects.json')
  }

  create(project: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post<CreateEmployeeModel>(`https://dummy.restapiexample.com/api/v1/create`,project).pipe(map(()=>void 0));
  }
}
