import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectComponent],
  providers: [],
  exports: [ProjectComponent]
})
export class ProjectComponentModule {
}
