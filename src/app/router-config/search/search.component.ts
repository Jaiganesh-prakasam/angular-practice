import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
// import {
//   debounceTime,
//   distinctUntilChanged,
//   tap,
//   switchMap,
// } from "rxjs/operators";
import { SearchItem } from "../data-model/search-item.model";
import { SearchJsonPService } from "../service/search-json-p.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.sass"],
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
  public results: Observable<SearchItem[]>;
  public searchField: FormControl;
  constructor(
    public itunes: SearchJsonPService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.searchField = new FormControl();

    // to do search on changes
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params["term"]) {
        this.doSearch(params["term"]);
      }
    });

    // // reactive way to fetch data
    // this.results = this.searchField.valueChanges.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   tap((_) => (this.loading = true)),
    //   switchMap((term) => this.itunes.search(term)),
    //   tap((_) => (this.loading = false))
    // );
  }

  ngOnInit(): void {}
  //
  doSearch(term: string) {
    console.log(term);
    this.loading = true;
    this.itunes
      .search(term)
      .toPromise()
      .then((_) => (this.loading = false));
  }
  onSearch(term: string) {
    this.router.navigate(["search", { term: term }]);
  }
  canDeactivate() {
    return this.itunes.results.length > 0;
  }
}
