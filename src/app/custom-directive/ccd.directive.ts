import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appCcd]"
})
export class CcdDirective {
  @HostBinding("style.border.px") ishovering = "solid 3";
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // renderer.setStyle(el.nativeElement, "backgroundColor", "gray");
  }
  @HostListener("mouseover") onMouseOver() {
    this.ishovering = "0";
    console.log("mouse over");
    let part = this.el.nativeElement.querySelector(".card-text");
    this.renderer.setStyle(part, "backgroundColor", "white");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.ishovering = "solid 4";
    console.log("mouse leave");
    let part = this.el.nativeElement.querySelector(".card-text");
    this.renderer.setStyle(part, "backgroundColor", "white");
  }
}
