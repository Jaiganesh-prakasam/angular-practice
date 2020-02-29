import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit
} from "@angular/core";
import { Joke } from "../models/shared/joke";
@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.sass"]
})
export class JokeComponent {
  @Input("Joke") data: Joke;
  constructor() {}

  // not necessary already given in Joke class
  // toggleJoke(status) {
  //   status.jokeStatus = !status.jokeStatus;
  //   console.log(status.jokeStatus);
  // }
}
