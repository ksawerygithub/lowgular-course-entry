import { NgModule } from '@angular/core';
import { MyEmployeeComponent } from './my-employee.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [MyEmployeeComponent],
  providers: [],
  exports: [MyEmployeeComponent]
})
export class MyEmployeeComponentModule {
}
