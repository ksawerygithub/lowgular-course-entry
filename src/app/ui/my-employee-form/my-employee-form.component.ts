import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyEmployeeService } from '../../services/my-employee.service';
import {MyEmployeeModel} from "../../model/my-employee.model";
import {CreateMyEmployeeModel} from "../../model/create-my-employee.model";

@Component({
  selector: 'app-my-employee-form',
  templateUrl: './my-employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyEmployeeFormComponent {
  readonly form: FormGroup = new FormGroup({ name: new FormControl(), age: new FormControl(), salary: new FormControl() });

  constructor(private _myEmployeeService: MyEmployeeService) {

  }

  titel: string = "Add new employee"

  onFormSubmitted(form: CreateMyEmployeeModel): void {
    this._myEmployeeService.create(form).subscribe()
  }
}
