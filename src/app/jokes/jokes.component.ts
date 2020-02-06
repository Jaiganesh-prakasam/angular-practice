import { Component, OnInit } from "@angular/core";
import { Joke } from "../models/shared/joke";
@Component({
  selector: "app-jokes",
  templateUrl: "./jokes.component.html",
  styleUrls: ["./jokes.component.sass"]
})
export class JokesComponent implements OnInit {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke("we buy tomato", "strike iorn while it is hot"),
      new Joke("we buy potato", "self help is best help"),
      new Joke("we buy brinjal", "look backwards to connect the dots")
    ];
  }

  ngOnInit() {}
  addJoke(joke) {
    this.jokes.unshift(joke);
  }
}
