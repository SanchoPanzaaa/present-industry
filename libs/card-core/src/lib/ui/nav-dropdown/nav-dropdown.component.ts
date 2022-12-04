import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ElAttributes, ElementPosition, NavigationBasic } from '../shared/model/card.model';
import { setStyle } from '../shared/utils/ui-helpers';

@Component({
  selector: 'present-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss'],
})
export class NavDropdownComponent implements OnChanges {
  @Input() public navConfig: NavigationBasic | null = null;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['navConfig'].currentValue) {
      const data = changes['navConfig'].currentValue;
        this.setBtnStyle();
        this.setDropdownPosition(data.location)
      }

  }

  protected setBtnStyle() {
    setStyle(this.element, ElAttributes.BackColor, this.navConfig?.backgroundColor);
    setStyle(this.element, ElAttributes.TextColor, this.navConfig?.textColor);
  }

  setDropdownPosition(elPosition: ElementPosition) {
    elPosition.isLeft ? setStyle(this.element, ElAttributes.Left, '0') : null;
    elPosition.isBottom ? setStyle(this.element, ElAttributes.Bottom, '100%') : null;
    elPosition.isRight ? setStyle(this.element, ElAttributes.Right, '0') : null;
    elPosition.isTop ? setStyle(this.element, ElAttributes.Top, '100%') : null;
  }
}
