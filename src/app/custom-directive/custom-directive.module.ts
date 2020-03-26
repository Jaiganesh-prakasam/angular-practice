import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomDirectiveComponent } from "./custom-directive/custom-directive.component";
import { CcdDirective } from './ccd.directive';
import { CcImageDirective } from './cc-image.directive';

@NgModule({
  declarations: [CustomDirectiveComponent, CcdDirective, CcImageDirective],
  imports: [CommonModule],
  exports: [CustomDirectiveComponent]
})
export class CustomDirectiveModule {}
