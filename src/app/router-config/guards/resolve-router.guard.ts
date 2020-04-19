import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ResolveRouterGuard implements Resolve<any> {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.params["artistId"]);
    return this.http
      .jsonp(
        `https://itunes.apple.com/lookup?id=${route.params["artistId"]}`,
        "callback"
      )
      .toPromise()
      .then((res) => {
        return (res as any).results[0];
      });
  }
}
