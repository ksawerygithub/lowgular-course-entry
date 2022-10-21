import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../../services/project.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly list: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required])
  });

  constructor(private _projectService: ProjectService) {
  }

  onButtonClicked(list: { name: string, email: string, age: number, salary: number }) {
    alert(`User was successfully added to the database!
  Name:${list.name} Age:${list.age} Salary:${list.salary}`)
  }

onFormSubmitted(list: CreateEmployeeModel) {
    this._projectService.create(list).subscribe();
}
}
