import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ArtistTrackListComponent } from "./artist-track-list/artist-track-list.component";
import { ArtistAlbumListComponent } from "./artist-album-list/artist-album-list.component";
const routes: Routes = [
  { path: "", redirectTo: "tracks", pathMatch: "full" },
  { path: "tracks", component: ArtistTrackListComponent },
  { path: "albums", component: ArtistAlbumListComponent },
  { path: "**", component: ArtistTrackListComponent },
];
@NgModule({
  declarations: [ArtistTrackListComponent, ArtistAlbumListComponent],
  exports: [ArtistTrackListComponent, ArtistAlbumListComponent, RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ChildmodulesModule {}
