import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { InjectorExampleService } from "./injector-example.service";
// import { ProvidersExampleService } from "./providers-example.service";
import { InjectInjectableService } from "./inject-injectable.service";
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    InjectInjectableService
    // ProvidersExampleService
    // InjectorExampleService
  ]
})
export class DependencyInjectionModule {}
