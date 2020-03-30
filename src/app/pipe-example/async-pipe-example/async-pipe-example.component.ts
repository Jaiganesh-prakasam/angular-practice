import { Component, OnInit } from "@angular/core";

@Component({
  selector: "async-pipe-example",
  templateUrl: "./async-pipe-example.component.html",
  styleUrls: ["./async-pipe-example.component.sass"]
})
export class AsyncPipeExampleComponent implements OnInit {
  // Data binded with variable
  // promiseData: any;

  // promise variable
  promise: Promise<string>;
  constructor() {
    // Data binded with variable
    // this.getPromise().then(v => (this.promiseData = v));

    this.promise = this.getPromise();
  }

  ngOnInit(): void {}
  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }
}
