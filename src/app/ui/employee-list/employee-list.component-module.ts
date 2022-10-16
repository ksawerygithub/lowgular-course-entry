import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import {EmployeeServiceModule} from "../../services/employee.service-module";
import {EmployeeService} from "../../services/employee.service";

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent],
})
export class EmployeeListComponentModule {}

