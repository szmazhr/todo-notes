import DOM from "../Modules/domStuff";
import eventHandler from "../Modules/event-handler";
import { createHome } from "./home";
import { createSidebar } from "./sidebar";


eventHandler.subscribe('ready', () => {
  const content = DOM.select('.content');
  const sidebar = createSidebar();
  const home = createHome();


  DOM.bulkAppend(content, [sidebar], [home]);
});