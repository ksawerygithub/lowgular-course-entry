import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable} from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import {EmployeeService} from "../../services/employee.service";
import {PersonModel} from "../../model/person.model";


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {

  data$: Observable<PersonModel[]> = this._EmployeeService.getAll();


  data = [{ name: "Wojtek" }, { name: "Jacek" }]

  constructor (private _EmployeeService: EmployeeService ) {
  }
title: string= "nowy_tytul";
  ending: string= "zakonczenie";


}

