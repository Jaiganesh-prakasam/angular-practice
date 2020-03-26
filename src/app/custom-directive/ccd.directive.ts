import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appCcd]"
})
export class CcdDirective {
  @HostBinding("style.border.px") ishovering = "solid 3";
  @Input("appCcd") config: Object = {
    querySelector: ".card-text"
  };
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // renderer.setStyle(el.nativeElement, "backgroundColor", "gray");
  }
  @HostListener("mouseover") onMouseOver() {
    this.ishovering = "0";
    console.log("mouse over");
    let part = this.el.nativeElement.querySelector(
      this.config["querySelector"]
    );
    this.renderer.setStyle(part, "backgroundColor", "white");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.ishovering = "solid 4";
    console.log(this.config["querySelector"]);
    let part = this.el.nativeElement.querySelector(
      this.config["querySelector"]
    );
    this.renderer.setStyle(part, "backgroundColor", "white");
  }
}
