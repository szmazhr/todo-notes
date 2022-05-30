/*
 * Title: click-handler
 * Description: publishing event on click, and adding listener on new element when called.
 * EventName will be the same as you provided in data-onClick attribute
 * To add a click listener on newly added element, use: addClickListener(element);
 */

import DOM from "./domStuff";
import eventHandler from "/src/js/Modules/event-handler";

function addClickListener(element, eventName) {
  element.addEventListener("click", (event) => {
    const parent = element.closest("[data-id]");
    const id = parent.dataset.id;

    //id is required to be passed to eventHandler
    eventHandler.publish(eventName, event);

    //event logging added - to be removed
    console.log({element, parent , id, eventName});
  });
}


eventHandler.subscribe("delete-list", () => {
  const selectedList = DOM.select(".all-lists .selected");
  const selectedListId = selectedList.dataset.id;
  console.log(selectedListId);
})


export { addClickListener };
