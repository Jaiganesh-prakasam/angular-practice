import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { RouterConfigComponent } from "./router-config.component";
import { HeaderComponent } from "./header/header.component";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { SearchJsonPService } from "./search-json-p.service";
import { ArtistComponent } from "./artist/artist.component";
import { ArtistTrackListComponent } from "./artist-track-list/artist-track-list.component";
import { ArtistAlbumListComponent } from "./artist-album-list/artist-album-list.component";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "find", redirectTo: "search" },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  {
    path: "artist/:artistId",
    component: ArtistComponent,
    children: [
      { path: "", redirectTo: "tracks", pathMatch: "full" },
      { path: "tracks", component: ArtistTrackListComponent },
      { path: "albums", component: ArtistAlbumListComponent },
    ],
  },
  { path: "**", component: HomeComponent },
];
@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    RouterConfigComponent,
    HeaderComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    HomeComponent,
    SearchComponent,
    RouterConfigComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
  ],
  providers: [SearchJsonPService],
})
export class RouterConfigModule {}
