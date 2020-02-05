import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JokesComponent } from "./jokes/jokes.component";
import { JokeComponent } from "./joke/joke.component";
@NgModule({
  declarations: [AppComponent, JokesComponent, JokeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
