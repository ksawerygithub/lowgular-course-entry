import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MyEmployeeService } from '../../services/my-employee.service';
import {Observable} from "rxjs";
import {MyEmployeeModel} from "../../model/my-employee.model";

@Component({
  selector: 'app-my-employee',
  templateUrl: './my-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyEmployeeComponent {
  constructor(private _myEmployeeService: MyEmployeeService) {
  }

  data$: Observable<MyEmployeeModel[] | null > = this._myEmployeeService.getAll();
}
