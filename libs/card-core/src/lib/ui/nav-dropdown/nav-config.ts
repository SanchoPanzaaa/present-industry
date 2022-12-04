import { NavCategoryEnum, NavigationBasic, NavigationItemBasic } from "../shared/model/card.model"

export const navigationBtnDefault: NavigationBasic = {
    title: 'Pancier labor',
    category: NavCategoryEnum.CardNav,
    onlyIcon: true,
    backgroundColor: 'red',
    textColor: 'white',
    location: {
      isTop: true,
      isLeft: true,
    },
    items: [
      {  title: 'first', hint: 'hint-first', icon: 'menu', action: ()=> ''},
      {  title: 'second', hint: 'hint-second', icon: 'menu', action: ()=> ''},
      {  title: 'third', hint: 'hint-third', icon: 'menu', action: ()=> ''},
    ]
}
/*
export const navigationMain: NavigationBasic = {
  title: 'Pancier labor',
  category: NavCategoryEnum.CardNav,
  onlyIcon: true,
  backgroundColor: 'red',
  textColor: 'white',
  items: [
    {  title: 'first', hint: 'hint-first', icon: 'menu', action: ()=> ''},
    {  title: 'second', hint: 'hint-second', icon: 'menu', action: ()=> ''},
    {  title: 'third', hint: 'hint-third', icon: 'menu', action: ()=> ''},
  ]
}
 */

export const navigationCard: NavigationBasic = {
  title: 'navigation-card',
  category: NavCategoryEnum.CardNav,
  onlyIcon: true,
  backgroundColor: 'black',
  textColor: 'white',
  location: {
    isTop: true,
    isRight: true,
  },
  items: [
    {  title: 'settings', hint: 'hint-first', icon: 'menu', action: ()=> ''},
  ]
}

export const defaultNavItems: NavigationItemBasic[] = [
  {  title: 'first', hint: 'hint-first', icon: 'menu', action: ()=> ''},
  {  title: 'second', hint: 'hint-second', icon: 'menu', action: ()=> ''},
  {  title: 'third', hint: 'hint-third', icon: 'menu', action: ()=> ''},
]

// maybe it will make sense in the future, what was I trying to do here
export function createNavigationBtn(data: NavigationBasic): NavigationBasic {
  if(!isNullOrUndefined(data)) {
    const items = !isNullOrUndefined(data.items) ? data.items : defaultNavItems;
    return {
      title: data.title,
      category: data.category,
      onlyIcon: data.onlyIcon,
      backgroundColor: data.backgroundColor,
      textColor: data.textColor,
      items: createNavItems(items),
      location: data.location,
    }
  } else {
    return navigationBtnDefault;
  }
}

/*
  Create navigation items
*/

export function createNavItems(items: NavigationItemBasic[]): NavigationItemBasic[] {
  return items.map( (item, index) => {
    return {  title: item.title,
              hint: item.hint,
              icon: item.icon,
              action: item.action,
              index: index,
            }
    });
}

export function isNullOrUndefined(value: any) {
	return value === null || value === undefined;
}
