import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "clean"
})
export class CleanPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    let string = "";
    let valueArray = value.split(" ");
    let wordsToBeRemoved = args[0].split(",");
    for (let i of valueArray) {
      console.log(i);
      if (wordsToBeRemoved.includes(i)) {
        string = string + "@#*$ ";
      } else {
        string = string + i + " ";
      }
    }
    string.trim();
    return string;
  }
}
