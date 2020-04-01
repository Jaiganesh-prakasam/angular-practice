import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModelDrivenFormsComponent } from "./model-driven-forms/model-driven-forms.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
@NgModule({
  declarations: [ModelDrivenFormsComponent, ReactiveFormsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ModelDrivenFormsComponent, ReactiveFormsComponent]
})
export class FormExamplesModule {}
