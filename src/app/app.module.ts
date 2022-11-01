import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyEmployeeComponentModule} from "./ui/my-employee/my-employee.component-module";
import {MyEmployeeService} from "./services/my-employee.service";
import {MyEmployeeServiceModule} from "./services/my-employee.service-module";
import {MyEmployeeComponent} from "./ui/my-employee/my-employee.component";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyEmployeeServiceModule,
    MyEmployeeComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
