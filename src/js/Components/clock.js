import { addSeconds, format } from "date-fns";
import { settings } from "../Modules/data-management";
import DOM from "../Modules/domStuff";
import eventHandler from "../Modules/event-handler";

eventHandler.subscribe("initialized", () => {
  if(settings.clock.enabled){
    const parent =
      settings.clock.position.split("-")[0] === "top"
        ? DOM.select(".app-header")
        : DOM.select(".app-footer");
        const align = `.${settings.clock.position.split("-")[1]}`;
        const position = DOM.select(align, parent);
        const clockEl = DOM.textNode("{clock}", "span", position);
        let clock = new Date();
        setInterval(() => {
          clock = addSeconds(clock, 1)
          clockEl.textContent = format(clock, settings.clock.format);
        }, 1000);

  }
});

