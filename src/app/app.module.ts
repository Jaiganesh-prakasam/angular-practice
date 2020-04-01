import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JokesModule } from "./jokes/jokes.module";
// import { ViewChildrenContentChildrenModule } from "./view-children-content-children/view-children-content-children.module";
// import { InBuiltDirectivesModule } from "./in-built-directives/in-built-directives.module";
// import { CustomDirectiveModule } from "./custom-directive/custom-directive.module";
// import { ReactiveProgramingModule } from "./reactive-programing/reactive-programing.module";
// import { PipeExampleModule } from "./pipe-example/pipe-example.module";
// import { FormExamplesModule } from "./form-examples/form-examples.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    JokesModule
    // FormExamplesModule
    // PipeExampleModule
    // ReactiveProgramingModule
    // CustomDirectiveModule
    // InBuiltDirectivesModule,
    // ViewChildrenContentChildrenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
