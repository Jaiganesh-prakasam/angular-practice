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
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "find", redirectTo: "search" },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "**", component: HomeComponent },
];
@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    RouterConfigComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [HomeComponent, SearchComponent, RouterConfigComponent],
  providers: [SearchJsonPService],
})
export class RouterConfigModule {}
