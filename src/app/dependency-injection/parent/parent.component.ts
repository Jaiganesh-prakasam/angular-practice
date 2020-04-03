import { Component, OnInit } from "@angular/core";
import { SimpleService } from "../simple.service";
@Component({
  selector: "parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.sass"]
})
export class ParentComponent implements OnInit {
  constructor(public service: SimpleService) {}

  ngOnInit(): void {}
}
