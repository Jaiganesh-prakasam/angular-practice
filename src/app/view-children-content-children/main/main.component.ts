import { Component, OnInit } from "@angular/core";
import { Joke } from "../../models/shared/joke";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"]
})
export class MainComponent implements OnInit {
  joke: Joke[];
  constructor() {
    this.joke = [new Joke("this is joke from main", "joke one from main")];
  }

  ngOnInit() {}
}
