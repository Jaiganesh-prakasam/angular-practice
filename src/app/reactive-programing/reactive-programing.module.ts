import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ObservableSubscribeComponent } from "./observable-subscribe/observable-subscribe.component";
import { FormExampleComponent } from "./form-example/form-example.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [ObservableSubscribeComponent, FormExampleComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ObservableSubscribeComponent, FormExampleComponent]
})
export class ReactiveProgramingModule {}
