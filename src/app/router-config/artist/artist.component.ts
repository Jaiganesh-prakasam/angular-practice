import { Component, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.sass"],
})
export class ArtistComponent implements AfterViewInit {
  public artist: any;
  artistId: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.artistId = params["artistId"];
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${params["artistId"]}`,
          "callback"
        )
        .toPromise()
        .then((res) => {
          console.log(res);
          this.artist = (res as any).results[0];
          console.log(this.artist);
        });
    });
  }

  ngAfterViewInit(): void {}
}
