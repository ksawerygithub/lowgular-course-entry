import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MyEmployeeFormComponent } from './my-employee-form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [MyEmployeeFormComponent],
  providers: [],
  exports: [MyEmployeeFormComponent]
})
export class MyEmployeeFormComponentModule {
}
