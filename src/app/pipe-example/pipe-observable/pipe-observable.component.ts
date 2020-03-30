import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";
import { take, map } from "rxjs/operators";
@Component({
  selector: "pipe-observable",
  templateUrl: "./pipe-observable.component.html",
  styleUrls: ["./pipe-observable.component.sass"]
})
export class PipeObservableComponent {
  observable: Observable<number>;
  constructor() {
    this.observable = this.getObservable();
  }
  getObservable() {
    return interval(100)
      .pipe(take(10))
      .pipe(
        map(v => {
          console.log(v);
          return v * v;
        })
      );
  }
}
// conventional way without async
// export class PipeObservableComponent implements OnInit {
//   observableData: number;
//   subscription: any;
//   constructor() {
//     this.subscribeObservable();
//   }

//   ngOnInit(): void {}
//   ngOnDestroy() {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
//   getObservable() {
//     return interval(100)
//       .pipe(take(10))
//       .pipe(
//         map(v => {
//           console.log(v);
//           return v * v;
//         })
//       );
//   }
//   subscribeObservable() {
//     this.subscription = this.getObservable().subscribe(
//       v => (this.observableData = v)
//     );
//   }
// }
