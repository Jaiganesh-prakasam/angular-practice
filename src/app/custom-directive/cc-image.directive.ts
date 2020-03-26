import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appCcImage]"
})
export class CcImageDirective {
  @Input("appCcImage") config: Object = {
    initial: "",
    over: ""
  };
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseover") onMouseOver() {
    console.log("mouse over");
    let part = this.el.nativeElement;
    this.renderer.setAttribute(part, "src", this.config["initial"]);
  }
  @HostListener("mouseleave") onMouseLeave() {
    console.log(this.config["over"]);
    let part = this.el.nativeElement;
    this.renderer.setAttribute(part, "src", this.config["over"]);
  }
}
