import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
} from "rxjs/operators";
import { SearchItem } from "../data-model/search-item.model";
import { SearchObservableService } from "../search-observable.service";
@Component({
  selector: "http-using-observable",
  templateUrl: "./http-using-observable.component.html",
  styleUrls: ["./http-using-observable.component.sass"],
})
export class HttpUsingObservableComponent implements OnInit {
  public loading: boolean = false;
  public results: Observable<SearchItem[]>;
  public searchField: FormControl;
  constructor(private itunes: SearchObservableService) {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap((_) => (this.loading = true)),
      switchMap((term) => this.itunes.search(term)),
      tap((_) => (this.loading = false))
    );
  }

  ngOnInit(): void {}
  doSearch(term: string) {
    this.itunes.search(term);
  }
}
