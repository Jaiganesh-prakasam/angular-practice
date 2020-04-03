import { Component, OnInit } from "@angular/core";
import { SimpleService } from "../simple.service";
@Component({
  selector: "child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.sass"]
})
export class ChildComponent implements OnInit {
  constructor(public service: SimpleService) {}

  ngOnInit(): void {}
}
