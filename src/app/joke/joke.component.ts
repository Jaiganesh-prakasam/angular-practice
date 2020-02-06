import { Component, OnInit, Input } from "@angular/core";
import { Joke } from "../models/shared/joke";
@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.sass"]
})
export class JokeComponent implements OnInit {
  @Input("Joke") data: Joke;
  constructor() {}

  ngOnInit() {}
  // not necessary already given in Joke class
  // toggleJoke(status) {
  //   status.jokeStatus = !status.jokeStatus;
  //   console.log(status.jokeStatus);
  // }
}
