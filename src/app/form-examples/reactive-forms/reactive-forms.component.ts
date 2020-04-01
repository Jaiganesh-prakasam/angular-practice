import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
@Component({
  selector: "reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.sass"]
})
export class ReactiveFormsComponent implements OnInit {
  searchField: FormControl;
  searches: string[];
  constructor() {
    this.searchField = new FormControl("");
    this.searches = [];
    this.searchField.valueChanges
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      .subscribe(term => {
        this.searches.push(term);
      });
  }

  ngOnInit(): void {}
}
