import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { ArtistComponent } from "./artist/artist.component";
import { ArtistTrackListComponent } from "./artist-track-list/artist-track-list.component";
import { ArtistAlbumListComponent } from "./artist-album-list/artist-album-list.component";
const routes: Routes = [
  {
    path: "",
    component: ArtistComponent,
    children: [
      { path: "", redirectTo: "tracks", pathMatch: "full" },
      { path: "tracks", component: ArtistTrackListComponent },
      { path: "albums", component: ArtistAlbumListComponent },
    ],
  },
];
@NgModule({
  declarations: [
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    ArtistComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    ArtistComponent,
  ],
  providers: [],
})
export class ChildmodulesModule {}
