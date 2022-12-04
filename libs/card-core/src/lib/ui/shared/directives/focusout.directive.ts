import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[presentFocusOut]"
})
export class FocusOutDirective {
  @Output() focusOut: EventEmitter<boolean> = new EventEmitter();

  constructor(protected el: ElementRef){}

  @HostListener('document:click', ['$event'])

  clickout(event: PointerEvent) {
    if(this.el.nativeElement.contains(event.target)) {
      console.log("clicked inside");
      this.focusOut.emit(false);

    } else {
      console.log("clicked outside");
      this.focusOut.emit(true);

    }
  }
}
