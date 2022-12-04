import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[presentHighlight]'
})
export class HighlightDirective implements OnInit{

  // @Input() appHighlight;

  constructor( private element: ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.setAttribute('', '');
  }
}
