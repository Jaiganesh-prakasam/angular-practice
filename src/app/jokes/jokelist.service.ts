import { Injectable } from "@angular/core";
import { Joke } from "../models/shared/joke";
import { JokemaxService } from "./jokemax.service";
@Injectable({
  providedIn: "root"
})
export class JokelistService {
  jokes: Joke[];
  constructor(private jokemaxService: JokemaxService) {
    this.jokes = [new Joke("we buy tomato", "strike iorn while it is hot")];
  }
  addJoke(joke) {
    if (this.jokes.length < this.jokemaxService.maxValue)
      this.jokes.unshift(joke);
  }
  removeData() {
    this.jokes.pop();
  }
  addData() {
    if (this.jokes.length < this.jokemaxService.maxValue)
      this.jokes.unshift(
        new Joke("we buy tomato", "strike iorn while it is hot")
      );
  }
}
