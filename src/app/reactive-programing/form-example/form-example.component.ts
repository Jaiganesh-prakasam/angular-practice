import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { map, filter } from "rxjs/operators";
@Component({
  selector: "form-example",
  templateUrl: "./form-example.component.html",
  styleUrls: ["./form-example.component.sass"]
})
export class FormExampleComponent implements OnInit {
  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  /* Observable Solution */
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      comment: this.comment,
      name: this.name,
      email: this.email
    });
    this.form.valueChanges
      .pipe(filter(data => this.form.valid))
      .pipe(
        map(data => {
          data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, "");
          data.lastUpdateTS = new Date();
          return data;
        })
      )
      .subscribe(data => console.log(JSON.stringify(data)));
  }
  /* None Observable Solution */
  // constructor(fb: FormBuilder) {
  // this.form = fb.group({
  // "comment": this.comment,
  // "name": this.name,
  // "email": this.email
  // });
  // this.form.valueChanges
  // .subscribe( data => {
  // if (this.form.valid) {
  // data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
  // data.lastUpdateTS = new Date();
  // console.log(JSON.stringify(data))
  // }
  // });
  // }
  onSubmit() {
    console.log("Form submitted!");
  }

  ngOnInit(): void {}
}
