import { Component, OnInit, Input } from "@angular/core";

export class Joke {
  jokeConversation: string;
  jokeReply: string;
  jokeStatus: boolean;
}
@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.sass"]
})
export class JokeComponent implements OnInit {
  @Input("Joke") data: Joke;
  constructor() {}

  ngOnInit() {}
  toggleJoke(status) {
    status.jokeStatus = !status.jokeStatus;
    console.log(status.jokeStatus);
  }
}
