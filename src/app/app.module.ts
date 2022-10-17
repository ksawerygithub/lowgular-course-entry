import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {EmployeeFacesComponentModule} from "./ui/employee-faces/employee-faces.component-module";
import {EmployeeService} from "./services/employee.service";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProjectComponentModule} from "./ui/project/project.component-module";
import {ProjectService} from "./services/project.service";
import {ProjectServiceModule} from "./services/project.service-module";
import {EmployeeFormComponentModule} from "./ui/employee-form/employee-form.component-module";
import {ListComponentModule} from "./ui/list/list.component-module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeFacesComponentModule,
    EmployeeServiceModule,
    ProjectServiceModule,
    ProjectComponentModule,
    EmployeeFormComponentModule,
    ListComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
