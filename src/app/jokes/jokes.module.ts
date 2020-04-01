import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { JokeComponent } from "./joke/joke.component";
import { JokesComponent } from "./jokes.component";
import { JokeFormComponent } from "./joke-form/joke-form.component";
import { JokeContainerComponent } from "./joke-container/joke-container.component";
import { JokeListComponent } from "./joke-list/joke-list.component";
import { CleanPipe } from "./clean.pipe";
@NgModule({
  declarations: [
    JokeComponent,
    JokesComponent,
    JokeFormComponent,
    JokeContainerComponent,
    JokeListComponent,
    CleanPipe
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    JokeComponent,
    JokesComponent,
    JokeFormComponent,
    JokeContainerComponent,
    JokeListComponent
  ]
})
export class JokesModule {}
