import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModelDrivenFormsComponent } from "./model-driven-forms/model-driven-forms.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [ModelDrivenFormsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ModelDrivenFormsComponent]
})
export class FormExamplesModule {}
