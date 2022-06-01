import DOM from "../Modules/domStuff";
import { createMainHeader } from "./main-header";


function createHome() {
  const [container, header, main] = DOM.createElementsByClassName(
    ["body"],
    ["header", "header"],
    ["main-content", "main"]
  );


    const headerContent = createMainHeader();
  
  DOM.bulkAppend(container, [header, [headerContent]], [main]);
  return container;
}

export { createHome };