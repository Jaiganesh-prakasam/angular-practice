import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";
@Component({
  selector: "http-using-promise",
  templateUrl: "./http-using-promise.component.html",
  styleUrls: ["./http-using-promise.component.sass"],
})
export class HttpUsingPromiseComponent implements OnInit {
  public loading: boolean = false;
  constructor(public itunes: SearchService) {}

  ngOnInit(): void {}
  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(() => (this.loading = false));
  }
}
