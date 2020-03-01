import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
// import { JokesModule } from "./jokes/jokes.module";
import { ViewChildrenContentChildrenModule } from "./view-children-content-children/view-children-content-children.module";
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ViewChildrenContentChildrenModule
    // JokesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
