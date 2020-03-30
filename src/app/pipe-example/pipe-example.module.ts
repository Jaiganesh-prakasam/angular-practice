import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InBuiltPipesComponent } from "./in-built-pipes/in-built-pipes.component";
import { AsyncPipeExampleComponent } from "./async-pipe-example/async-pipe-example.component";
import { PipeObservableComponent } from "./pipe-observable/pipe-observable.component";
import { CustomPipeComponent } from "./custom-pipe/custom-pipe.component";
import { DefaultPipe } from './default.pipe';

@NgModule({
  declarations: [
    InBuiltPipesComponent,
    AsyncPipeExampleComponent,
    PipeObservableComponent,
    CustomPipeComponent,
    DefaultPipe
  ],
  imports: [CommonModule],
  exports: [
    InBuiltPipesComponent,
    AsyncPipeExampleComponent,
    PipeObservableComponent,
    CustomPipeComponent
  ]
})
export class PipeExampleModule {}
