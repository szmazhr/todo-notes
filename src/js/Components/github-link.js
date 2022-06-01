import DOM from "../Modules/domStuff";
import eventHandler from "../Modules/event-handler";

eventHandler.subscribe("initialized", () => {
    const parent = DOM.select(".app-footer");
        const position = DOM.select('.right', parent);

        const githubLink = DOM.createElements('a');
        githubLink.setAttribute('href', 'https://github.com/szmazhr/todo-notes');
        githubLink.setAttribute('target', '_blank');
        DOM.bsIcon('github', githubLink);
        position.appendChild(githubLink);
});