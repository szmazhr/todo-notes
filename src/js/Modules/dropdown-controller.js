// loadDropdownMenu

import { loadDropdownMenu } from "../Components/dropdown";
import { menuOptions } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";




eventHandler.subscribe('list-menu', e => {
  const header = e.target.closest('.header');
  e.stopPropagation();
  
  header.append(loadDropdownMenu(menuOptions.listMenuOptions));
})

eventHandler.subscribe('click-anywhere', e => {
  const menu = DOM.select('.dropdown-menu', e.currentTarget);
  if (menu) {
    menu.remove();
  }
})


eventHandler.subscribe('view-filter', e => {
  const header = e.target.closest('.header');
  e.stopPropagation();
  header.append(loadDropdownMenu(menuOptions.filterOptions));
})
eventHandler.subscribe('view-sort', e => {
  const header = e.target.closest('.header');
  e.stopPropagation();
  header.append(loadDropdownMenu(menuOptions.sortOptions));
})