export interface BaseStyle {
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const defaultStyle: BaseStyle = {
  backgroundColor: 'white',
  textColor: 'black',
  fontSize: '15px',
  fontWeight: '500',
}


export interface ButtonBasic extends BaseStyle {
  title: string;
  icon?: string;
  hint?: string;

  onlyIcon?: boolean;

  // find a way to call any function
  action?: (e: Event) => void;
}

export interface NavigationBasic extends ButtonBasic {
  items: NavigationItemBasic[];
  category: NavCategoryEnum;
  location: ElementPosition;

  options?: NavOptions;
}

export interface NavigationItemBasic extends ButtonBasic {
  roles?: [];

}

export interface NavOptions {
  options: [];
}

export enum NavCategoryEnum {
  MainNav = 'main-nav',
  SideNav = 'side-nav',
  CardNav = 'card-nav',
}

export interface ElementPosition {
  isTop?: boolean;
  isCenter?: boolean;
  isBottom?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
}

export enum DropdownPosition {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

export enum ElAttributes {
  Top = '--position-top',
  Bottom = '--position-bottom',
  Right = '--position-right',
  Left = '--position-left',

  BackColor = '--background-color',
  TextColor = '--text-color',

}
