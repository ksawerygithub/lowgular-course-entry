import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  onButtonClicked(list: {name: string, email: string, age: number, salary: number }){
  alert(`User was successfully added to the database!
  Name:${list.name} Age:${list.age} Salary:${list.salary}`) }
}
