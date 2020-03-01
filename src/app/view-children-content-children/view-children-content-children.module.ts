import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main/main.component";
import { JokeComponent } from "./joke/joke.component";
import { JokeListComponent } from "./joke-list/joke-list.component";

@NgModule({
  declarations: [MainComponent, JokeComponent, JokeListComponent],
  imports: [CommonModule],
  exports: [MainComponent, JokeComponent, JokeListComponent]
})
export class ViewChildrenContentChildrenModule {}
