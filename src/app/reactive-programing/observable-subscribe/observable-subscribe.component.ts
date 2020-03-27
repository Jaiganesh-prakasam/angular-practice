import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { take, map } from "rxjs/operators";
@Component({
  selector: "observable-subscribe",
  templateUrl: "./observable-subscribe.component.html",
  styleUrls: ["./observable-subscribe.component.sass"]
})
export class ObservableSubscribeComponent implements OnInit {
  constructor() {
    const intervalEx = interval(1000);
    const takeEx = intervalEx.pipe(take(5));
    const mapEx = takeEx.pipe(map(val => Date.now()));
    mapEx.subscribe(value => console.log("Subscriber: " + value));
  }

  ngOnInit(): void {}
}
