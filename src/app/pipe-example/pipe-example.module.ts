import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InBuiltPipesComponent } from "./in-built-pipes/in-built-pipes.component";

@NgModule({
  declarations: [InBuiltPipesComponent],
  imports: [CommonModule],
  exports: [InBuiltPipesComponent]
})
export class PipeExampleModule {}
