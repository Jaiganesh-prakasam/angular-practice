import {
  Component,
  OnInit,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  ContentChildren,
  ContentChild
} from "@angular/core";
import { Joke } from "src/app/models/shared/joke";
import { JokeComponent } from "../joke/joke.component";
import { isArray } from "util";
@Component({
  selector: "joke-list",
  templateUrl: "./joke-list.component.html",
  styleUrls: ["./joke-list.component.sass"]
})
export class JokeListComponent
  implements
    OnInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  joke: Joke[];
  @ViewChild(JokeComponent, { static: true }) child!: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header", { static: true }) headerEl: ElementRef;

  @ContentChild(JokeComponent, { static: true })
  jokeContentChild: JokeComponent;
  constructor() {
    this.joke = [
      new Joke("this is from list1", "reply from list1"),
      new Joke("this is from list2", "reply from list2")
    ];
  }

  ngOnInit() {}
  ngAfterContentInit() {
    console.log("ng after content init");
    console.log(this.jokeContentChild);
  }
  ngAfterContentChecked() {
    console.log("ng after content checked");
  }
  ngAfterViewInit() {
    console.log("ng after view init");
    console.log(isArray(this.child));
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(isArray(jokes));
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }
  ngAfterViewChecked() {
    console.log("ng after view checked");
  }
}
