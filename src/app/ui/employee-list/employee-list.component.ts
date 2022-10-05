import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {

  data = [{ name: "Wojtek" }, { name: "Jacek" }]

  constructor(private _client: HttpClient) {
  }
title: string= "nowy_tytul";
  ending: string= "zakonczenie";

  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>('assets/data/employees.json');
}

