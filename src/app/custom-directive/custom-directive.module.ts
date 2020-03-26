import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomDirectiveComponent } from "./custom-directive/custom-directive.component";
import { CcdDirective } from './ccd.directive';

@NgModule({
  declarations: [CustomDirectiveComponent, CcdDirective],
  imports: [CommonModule],
  exports: [CustomDirectiveComponent]
})
export class CustomDirectiveModule {}
