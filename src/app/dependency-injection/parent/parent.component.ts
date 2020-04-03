import { Component, OnInit } from "@angular/core";
import { SimpleService } from "../simple.service";

@Component({
  selector: "parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.sass"],
  // providers: [SimpleService]
  viewProviders: [SimpleService]
})
export class ParentComponent implements OnInit {
  constructor(public service: SimpleService) {}

  ngOnInit(): void {}
}
