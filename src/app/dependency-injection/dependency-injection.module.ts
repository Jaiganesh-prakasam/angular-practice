import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InjectorExampleService } from "./injector-example.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [InjectorExampleService]
})
export class DependencyInjectionModule {}
