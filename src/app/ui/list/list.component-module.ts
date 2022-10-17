import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [ListComponent],
  providers: [],
  exports: [ListComponent]
})
export class ListComponentModule {
}
