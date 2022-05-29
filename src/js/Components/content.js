import DOM from "../Modules/domStuff";
import eventHandler from "../Modules/event-handler";
import { createSidebar } from "./sidebar";


eventHandler.subscribe('ready', () => {
  const content = DOM.select('.content');
  const sidebar = createSidebar();
  console.log('ready');


  DOM.bulkAppend(content, [sidebar]);
});