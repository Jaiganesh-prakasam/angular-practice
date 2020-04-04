import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class JokemaxService {
  maxValue: number = 10;
  constructor() {}
}
