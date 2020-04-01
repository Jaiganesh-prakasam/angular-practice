import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModelDrivenFormsComponent } from "./model-driven-forms/model-driven-forms.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
@NgModule({
  declarations: [
    ModelDrivenFormsComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    ModelDrivenFormsComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormComponent
  ]
})
export class FormExamplesModule {}
