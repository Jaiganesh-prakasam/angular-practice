import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { InjectorExampleService } from "./injector-example.service";
// import { ProvidersExampleService } from "./providers-example.service";
// import { InjectInjectableService } from "./inject-injectable.service";
import { SimpleService } from "./simple.service";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [FormsModule, CommonModule],
  providers: [
    // SimpleService
    // InjectInjectableService
    // ProvidersExampleService
    // InjectorExampleService
  ],
  exports: [ParentComponent, ChildComponent]
})
export class DependencyInjectionModule {}
