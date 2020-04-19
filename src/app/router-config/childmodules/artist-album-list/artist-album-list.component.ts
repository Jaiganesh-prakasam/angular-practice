import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-artist-album-list",
  templateUrl: "./artist-album-list.component.html",
  styleUrls: ["./artist-album-list.component.sass"],
})
export class ArtistAlbumListComponent implements OnInit {
  public albums: any[];
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.parent.params.subscribe((params) => {
      let url = `https://itunes.apple.com/lookup?id=${params["artistId"]}&entity=album`;
      this.http
        .jsonp(url, "callback")
        .toPromise()
        .then((res) => {
          console.log(res);
          this.albums = (res as any).results.slice(1);
          console.log(this.albums);
        });
    });
  }

  ngOnInit(): void {}
}
