import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
// import { JokesModule } from "./jokes/jokes.module";
// import { ViewChildrenContentChildrenModule } from "./view-children-content-children/view-children-content-children.module";
// import { InBuiltDirectivesModule } from "./in-built-directives/in-built-directives.module";
import { CustomDirectiveModule } from "./custom-directive/custom-directive.module";
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CustomDirectiveModule
    // InBuiltDirectivesModule,
    // JokesModule,
    // ViewChildrenContentChildrenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
