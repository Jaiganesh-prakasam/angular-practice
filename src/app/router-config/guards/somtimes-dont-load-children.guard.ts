import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class SomtimesDontLoadChildrenGuard implements CanLoad {
  constructor() {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log("canload");
    return true;
  }
}
