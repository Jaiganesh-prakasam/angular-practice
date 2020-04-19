import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { SearchComponent } from "../search/search.component";

@Injectable({
  providedIn: "root",
})
export class UnsearchedTermGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: SearchComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    console.log("UnsearchedTermGuard");
    console.log(currentState.url);
    return component.canDeactivate() || window.confirm("Are you sure?");
  }
}
