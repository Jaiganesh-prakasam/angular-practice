import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JokesComponent } from "./jokes/jokes.component";
import { JokeComponent } from "./joke/joke.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JokeFormComponent } from "./joke-form/joke-form.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { JokeContainerComponent } from './joke-container/joke-container.component';
@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeComponent,
    JokeFormComponent,
    HeaderComponent,
    FooterComponent,
    JokeContainerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
