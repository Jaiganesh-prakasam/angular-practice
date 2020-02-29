import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-joke-container",
  templateUrl: "./joke-container.component.html",
  styleUrls: ["./joke-container.component.sass"]
})
export class JokeContainerComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentChecked,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input("JokeContent") data: any;
  constructor() {
    // console.log("i am from constructor");
  }

  ngOnInit() {
    // console.log("ng on init triggered");
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log("data is" + changes);
    // for (let key in changes) {
    //   console.log(`${key}
    //   previous: ${changes[key].previousValue}
    //     current: ${changes[key].currentValue}
    //   `);
    // }
  }
  ngAfterContentChecked() {
    // console.log("ng after content checked");
  }
  ngAfterContentInit() {
    // console.log("ng after content init");
  }
  ngAfterViewChecked() {
    // console.log("ng after view checked");
  }
  ngAfterViewInit() {
    // console.log("ng after view init");
  }
  ngOnDestroy() {
    // console.log("ng on destroy");
  }
}
