import { Component } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
@Component({
  selector: "core-http",
  templateUrl: "./core-http.component.html",
  styleUrls: ["./core-http.component.sass"],
})
export class CoreHttpComponent {
  apiRoot: string = "http://httpbin.org";
  constructor(private http: HttpClient) {}
  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    let search = new HttpParams().set("foo", "moo").set("limit", "25");
    console.log(url);
    this.http.get(url, { params: search }).subscribe((res) => console.log(res));
  }
  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    let search = new HttpParams();
    search.set("foo", "moo");
    search.set("limit", "25");
    console.log(url);
    this.http
      .post(url, { moo: "foo", goo: "loo" })
      .subscribe((res) => console.log(res));
  }
  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    let search = new URLSearchParams();
    search.set("foo", "moo");
    search.set("limit", "25");
    console.log(url);
    this.http
      .put(url, { moo: "foo", goo: "loo" })
      .subscribe((res) => console.log(res));
  }
  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    let search = new URLSearchParams();
    search.set("foo", "moo");
    search.set("limit", "25");
    console.log(url);
    this.http.delete(url).subscribe((res) => console.log(res));
  }
  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    console.log(url);
    this.http
      .get(url)
      .toPromise()
      .then((res) => console.log(res));
  }
  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    console.log(url);
    this.http
      .get(url)
      .toPromise()
      .then(
        (res) => console.log(res),
        (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }
  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    let url = `${this.apiRoot}/post`;
    console.log(url);
    this.http.get(url).subscribe(
      (res) => console.log(res),
      (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
    let headers: HttpHeaders = new HttpHeaders();
    headers.append("Authorization", btoa("username:password"));
    let opts: HttpParams = new HttpParams();
    // opts.headers = headers;
    let url = `${this.apiRoot}/get`;
    console.log(url);
    this.http.get(url).subscribe(
      (res) => console.log(res),
      (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
}
