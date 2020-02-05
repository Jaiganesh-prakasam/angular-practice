import { Component, OnInit } from "@angular/core";

// data model
export class Joke {
  jokeConversation: string;
  jokeReply: string;
  jokeStatus: boolean;
  constructor(jokec, joker) {
    this.jokeConversation = jokec;
    this.jokeReply = joker;
    this.jokeStatus = false;
  }
  jokeStatusToggle() {
    this.jokeStatus = !this.jokeStatus;
  }
}
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
}
