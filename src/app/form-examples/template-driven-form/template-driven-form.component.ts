import { Component, OnInit, ViewChild } from "@angular/core";
export class registration {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  language: string;
  constructor() {}
}
@Component({
  selector: "template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.sass"]
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild("f") form: any;
  model: registration = new registration();
  langs: string[] = ["English", "French", "German"];
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log("form submitted");
  }
  onReset() {
    this.form.reset();
  }
}
