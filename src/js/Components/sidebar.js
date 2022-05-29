import DOM from "../Modules/domStuff";
import {makeList } from "./makeList";
import { createProfileCard } from "./profile-card";


function createSidebar() {
  const [sidebar, lists, filtered_lists, all_lists] =
    DOM.createElementsByClassName(
      ["sidebar"],
      ["lists"],
      ["filtered-lists", "section"],
      ["all-lists", "section"]
    );
    DOM.textNode("My Lists", "h3", all_lists);
    makeList(1, filtered_lists);
    makeList(2, all_lists);

    const profileCard = createProfileCard();
    DOM.bulkAppend(sidebar, [lists, [filtered_lists], [all_lists]], [profileCard]);
    
  return sidebar;
}

export { createSidebar };
