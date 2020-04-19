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
    console.log(this.route.snapshot.data);
    // assign the data from resolve to local variable
    this.artist = this.route.snapshot.data.artistData;
  }

  ngAfterViewInit(): void {}
}
