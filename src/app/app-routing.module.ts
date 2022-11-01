import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyEmployeeComponent} from "./ui/my-employee/my-employee.component";
import {MyEmployeeServiceModule} from "./services/my-employee.service-module";
import {MyEmployeeComponentModule} from "./ui/my-employee/my-employee.component-module";

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
