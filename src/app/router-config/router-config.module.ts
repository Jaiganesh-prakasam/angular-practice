import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { RouterConfigComponent } from "./router-config.component";
import { HeaderComponent } from "./header/header.component";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { SearchJsonPService } from "./service/search-json-p.service";
import { UserService } from "./service/user.service";
import { AlwaysAuthChildrenGuard } from "./guards/always-auth-children.guard";
import { AlwaysAuthGuard } from "./guards/always-auth.guard";
import { OnlyLoggedInUserGuard } from "./guards/only-logged-in-user.guard";
import { UnsearchedTermGuard } from "./guards/unsearched-term.guard";
import { SomtimesDontLoadChildrenGuard } from "./guards/somtimes-dont-load-children.guard";
import { ResolveRouterGuard } from "./guards/resolve-router.guard";
import { ChildmodulesModule } from "./childmodules/childmodules.module";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "find", redirectTo: "search" },
  { path: "home", component: HomeComponent },
  {
    path: "search",
    component: SearchComponent,
    canDeactivate: [UnsearchedTermGuard],
  },
  {
    path: "artist/:artistId",
    canActivate: [OnlyLoggedInUserGuard, AlwaysAuthGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    canLoad: [SomtimesDontLoadChildrenGuard],
    loadChildren: () =>
      import("./childmodules/childmodules.module").then(
        (m) => m.ChildmodulesModule
      ),
    resolve: {
      artistData: ResolveRouterGuard,
    },
  },
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
    ChildmodulesModule,
  ],
  exports: [HomeComponent, SearchComponent, RouterConfigComponent],
  providers: [
    SearchJsonPService,
    UserService,
    UnsearchedTermGuard,
    OnlyLoggedInUserGuard,
    AlwaysAuthGuard,
    AlwaysAuthChildrenGuard,
    SomtimesDontLoadChildrenGuard,
    ResolveRouterGuard,
  ],
})
export class RouterConfigModule {}
