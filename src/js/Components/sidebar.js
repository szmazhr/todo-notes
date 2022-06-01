import DOM from "../Modules/domStuff";
import { createIconButton } from "./icon-button";
import {makeList } from "./makeList";
import { createProfileCard } from "./profile-card";


function createSidebar() {
  const [sidebar, lists, filtered_lists, all_lists, header] =
    DOM.createElementsByClassName(
      ["sidebar"],
      ["lists"],
      ["filtered-lists", "section"],
      ["all-lists", "section"],
      ["header"]
    );

    const addListBtn = createIconButton("three-dots-vertical", "list-menu");
    DOM.textNode("My Lists", "h3", header);


    
    const profileCard = createProfileCard();
    DOM.bulkAppend(sidebar, [lists, [filtered_lists], [all_lists, [header, [addListBtn]]]], [profileCard]);
    
    makeList(1, filtered_lists);
    makeList(2, all_lists);
    // const pop = DOM.select('.dropdown-menu');
    // header.append(pop)
  return sidebar;
}

export { createSidebar };
