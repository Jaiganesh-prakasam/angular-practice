import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SearchItem } from "../data-model/search-item.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class SearchJsonPService {
  apiRoot: string = "https://itunes.apple.com/search";
  results: SearchItem[];
  constructor(private http: HttpClient) {
    this.results = [];
  }

  search(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    this.results = [];
    return this.http.jsonp(apiURL, "callback").pipe(
      map((res) => {
        this.results = (res as any).results.map((item) => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }
}
