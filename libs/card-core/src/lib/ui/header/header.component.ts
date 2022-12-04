import { Component, ElementRef, Input } from '@angular/core';
import { navigationBtnDefault, navigationCard } from '../nav-dropdown/nav-config';
import { NavigationBasic } from '../shared/model/card.model';
import { setStyle } from '../shared/utils/ui-helpers';
import { headerConfDefault, HeaderConfig } from './header-config';

@Component({
  selector: 'present-industry-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerConf: HeaderConfig = headerConfDefault;
  public navConfig1: NavigationBasic =  navigationCard;
  public navConfig2: NavigationBasic = navigationBtnDefault;

  constructor(protected element: ElementRef) {
    setStyle(element, '--justify-content', this.headerConf.justifyContent)
  }
}


