import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InjectorExampleService } from "./injector-example.service";
import { ProvidersExampleService } from "./providers-example.service";
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ProvidersExampleService
    // InjectorExampleService
  ]
})
export class DependencyInjectionModule {}
