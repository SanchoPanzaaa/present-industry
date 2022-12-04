import { ElementRef } from "@angular/core";

export function setStyle(el: ElementRef, key?: string, value?: string) {
  el.nativeElement.style.setProperty(key, value);
}

export function removeStyleProp(el: ElementRef, key: string) {
  el.nativeElement.style.removeProperty(key);
}


