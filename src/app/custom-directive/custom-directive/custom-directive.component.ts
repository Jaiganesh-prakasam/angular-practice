import { Component, OnInit } from "@angular/core";

@Component({
  selector: "custom-directive",
  templateUrl: "./custom-directive.component.html",
  styleUrls: ["./custom-directive.component.sass"]
})
export class CustomDirectiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
