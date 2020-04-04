import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { JokeComponent } from "./joke/joke.component";
import { JokesComponent } from "./jokes.component";
import { JokeFormComponent } from "./joke-form/joke-form.component";
import { JokeContainerComponent } from "./joke-container/joke-container.component";
import { JokeListComponent } from "./joke-list/joke-list.component";
import { CleanPipe } from "./clean.pipe";
import { JokemaxService } from "./jokemax.service";
@NgModule({
  declarations: [
    JokeComponent,
    JokesComponent,
    JokeFormComponent,
    JokeContainerComponent,
    JokeListComponent,
    CleanPipe
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    JokeComponent,
    JokesComponent,
    JokeFormComponent,
    JokeContainerComponent,
    JokeListComponent
  ],
  providers: [JokemaxService]
})
export class JokesModule {}
