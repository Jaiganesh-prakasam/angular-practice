import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "default"
})
export class DefaultPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    let image = "";
    if (value === "") {
      console.log(args[0]);
      image = args[0];
    } else {
      image = value;
    }
    return image;
  }
}
