import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Joke } from "../models/shared/joke";

@Component({
  selector: "app-joke-form",
  templateUrl: "./joke-form.component.html",
  styleUrls: ["./joke-form.component.sass"]
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  constructor() {}

  ngOnInit() {}
  createJoke(convo, reply) {
    this.jokeCreated.emit(new Joke(convo, reply));
  }
}
