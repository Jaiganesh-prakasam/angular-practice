import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ObservableSubscribeComponent } from "./observable-subscribe/observable-subscribe.component";

@NgModule({
  declarations: [ObservableSubscribeComponent],
  imports: [CommonModule],
  exports: [ObservableSubscribeComponent]
})
export class ReactiveProgramingModule {}
