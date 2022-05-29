/*
 * Title: click-handler
 * Description: publishing event on click, and adding listener on new element when called.
 * EventName will be the same as you provided in data-onClick attribute
 * To add a click listener on newly added element, use: addClickListener(element);
 */

import eventHandler from "/src/js/Modules/event-handler";
// (() => {
//   const elements = document.querySelectorAll("[data-onClick]");
//   elements.forEach((element) => addClickListener(element));
// })();

function addClickListener(element, data) {
  element.addEventListener("click", (event) => {
    const parent = element.closest("[data-id]");
    const id = parent.dataset.id;
    eventHandler.publish(data, id);

    //temp added
    console.log({element, parent , id, eventName: data});
  });
}

export { addClickListener };
