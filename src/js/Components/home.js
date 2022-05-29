import DOM from "../Modules/domStuff";
import { createMainHeader } from "./main-header";
import { createTask } from "./task-card";
import { tasks } from "../../data/dummy-data";



function createHome() {
  const [container, header, main] = DOM.createElementsByClassName(
    ["body"],
    ["header", "header"],
    ["main-content", "main"]
  );

    tasks.forEach(task => {
      const _task = createTask(task);
      main.append(_task);
    });
    const headerContent = createMainHeader();
    // const mainContent = createMainContent();

  
  DOM.bulkAppend(container, [header, [headerContent]], [main]);
  return container;
}

export { createHome };