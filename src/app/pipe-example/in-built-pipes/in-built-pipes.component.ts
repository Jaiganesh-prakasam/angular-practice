import { Component, OnInit } from "@angular/core";

@Component({
  selector: "in-built-pipes",
  templateUrl: "./in-built-pipes.component.html",
  styleUrls: ["./in-built-pipes.component.sass"]
})
export class InBuiltPipesComponent implements OnInit {
  jsonVal = [{ 1: "jai", 2: "jai1" }];
  dateVal: Date;
  constructor() {}

  ngOnInit(): void {
    this.dateVal = new Date();
  }
}
