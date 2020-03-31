import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "model-driven-forms",
  templateUrl: "./model-driven-forms.component.html",
  styleUrls: ["./model-driven-forms.component.sass"]
})
export class ModelDrivenFormsComponent implements OnInit {
  registrationForm: FormGroup;
  langs: string[] = ["English", "French", "German"];
  constructor() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
      }),
      mail: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    });
  }

  ngOnInit(): void {}
}
