import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "model-driven-forms",
  templateUrl: "./model-driven-forms.component.html",
  styleUrls: ["./model-driven-forms.component.sass"]
})
export class ModelDrivenFormsComponent implements OnInit {
  registrationForm: FormGroup;
  name: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  mail: FormControl;
  password: FormControl;
  language: FormControl;
  langs: string[] = ["English", "French", "German"];
  constructor() {
    this.formControlInitiation();
    this.formInitiation();
  }

  ngOnInit(): void {}

  formControlInitiation() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.mail = new FormControl("", [
      Validators.required,
      Validators.pattern("[^@]*@[^@]*")
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl("");
  }
  formInitiation() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      mail: this.mail,
      password: this.password,
      language: this.language
    });
  }
  onSubmit() {
    console.log("form submitted");
  }
  onReset() {
    this.registrationForm.reset();
  }
}
