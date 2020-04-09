import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SearchItem } from "./data-model/search-item.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class SearchJsonPService {
  apiRoot: string = "https://itunes.apple.com/search";

  constructor(private http: HttpClient) {}

  search(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.jsonp(apiURL, "callback").pipe(
      map((res) => {
        return (res as any).results.map((item) => {
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
