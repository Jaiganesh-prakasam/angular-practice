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
import { SearchJsonPService } from "../search-json-p.service";
@Component({
  selector: "http-using-jsonp",
  templateUrl: "./http-using-jsonp.component.html",
  styleUrls: ["./http-using-jsonp.component.sass"],
})
export class HttpUsingJsonpComponent implements OnInit {
  public loading: boolean = false;
  public results: Observable<SearchItem[]>;
  public searchField: FormControl;
  constructor(private itunes: SearchJsonPService) {
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
