import { Component, OnInit } from "@angular/core";
import { Joke } from "../models/shared/joke";
import { JokemaxService } from "./jokemax.service";
import { JokelistService } from "./jokelist.service";
@Component({
  selector: "app-jokes",
  templateUrl: "./jokes.component.html",
  styleUrls: ["./jokes.component.sass"]
})
export class JokesComponent implements OnInit {
  constructor(
    public jokemaxService: JokemaxService,
    public jokelistService: JokelistService
  ) {}

  ngOnInit() {
    console.log("triggered");
  }
  ngDestroy() {
    console.log("destroyed");
  }
  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }
  // addData() {
  //   this.jokes.unshift(
  //     new Joke("we buy tomato", "strike iorn while it is hot")
  //   );
  // }
  // removeData() {
  //   this.jokes.pop();
  // }
}
