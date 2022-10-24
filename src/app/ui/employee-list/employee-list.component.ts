import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonModel } from '../../model/person.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {




  data = [{ name: "Wojtek" }, { name: "Jacek" }]

  constructor(private _EmployeeService: EmployeeService, private _activatedRoute: ActivatedRoute) {
  }
  title: string = "nowy_tytul";
  ending: string = "zakonczenie";
  data$: Observable<PersonModel[]> = this._EmployeeService.getAll();
  remove(id: string) {
this._EmployeeService.delete(id).subscribe()};

  OnButtonClicked()
{alert('User was successfully removed')}




}

