import { Component, OnInit, AfterViewInit } from "@angular/core";
import { interval, Observable, of, from, fromEvent } from "rxjs";
import { take, map, distinctUntilChanged, debounceTime } from "rxjs/operators";
@Component({
  selector: "observable-subscribe",
  templateUrl: "./observable-subscribe.component.html",
  styleUrls: ["./observable-subscribe.component.sass"]
})
export class ObservableSubscribeComponent implements OnInit, AfterViewInit {
  constructor() {
    const intervalEx = interval(1000);
    const takeEx = intervalEx.pipe(take(5));
    const mapEx = takeEx.pipe(map(val => Date.now()));
    mapEx.subscribe(value => console.log("Subscriber: " + value));

    const source = from([1, 1, 2, 4, 2, 3, 3]);
    source.pipe(distinctUntilChanged()).subscribe(console.log);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    const searchBox = document.getElementById("search");
    console.log(searchBox);
    // streams
    const keyup = fromEvent(searchBox, "keyup");

    // wait 2s between keyups to emit current value
    keyup
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(2000)
      )
      .subscribe(console.log);
  }
}
