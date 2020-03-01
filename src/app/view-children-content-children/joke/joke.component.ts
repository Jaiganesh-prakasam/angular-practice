import { Component, OnInit, Input } from "@angular/core";
import { Joke } from "src/app/models/shared/joke";

@Component({
  selector: "joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.sass"]
})
export class JokeComponent implements OnInit {
  @Input("Joke") data: Joke;
  constructor() {}

  ngOnInit() {}
}
