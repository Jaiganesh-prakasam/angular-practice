import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-artist-track-list",
  templateUrl: "./artist-track-list.component.html",
  styleUrls: ["./artist-track-list.component.sass"],
})
export class ArtistTrackListComponent implements OnInit {
  public tracks: any[];
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.parent.params.subscribe((params) => {
      console.log(params);
      console.log("that was the artist ID");
      let url = `https://itunes.apple.com/lookup?id=${params["artistId"]}&entity=song`;
      this.http
        .jsonp(url, "callback")
        .toPromise()
        .then((res) => {
          console.log(res);
          this.tracks = (res as any).results.slice(1);
          console.log(this.tracks);
        });
    });
  }

  ngOnInit(): void {}
}
