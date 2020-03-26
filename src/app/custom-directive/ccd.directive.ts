import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appCcd]"
})
export class CcdDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, "backgroundColor", "gray");
  }
}
