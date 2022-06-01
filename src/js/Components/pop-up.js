import { addClickListener } from "../Modules/click-handler";
import DOM from "../Modules/domStuff";
import eventHandler from "../Modules/event-handler";
import { createIconButton } from "./icon-button";

const loadPopUp = (() => {
  const [container, content, header, _title, quick_btn, body] = DOM.createElementsByClassName(
    ['pop-up'],
    ['pop-up-content'],
    ['pop-up-header'],
    ['title'],
    ['quick-button'],
    ['pop-up-body'],
    )
    
    
    const cnlBtn = createIconButton('x-lg', 'cancel-button');
    const svBtn = createIconButton('check-lg', 'save-button');
    const titlePlace = DOM.textNode('Add New', 'h2', _title);
    container.setAttribute('data-id', 'pop-up');
    
    DOM.bulkAppend(container, [content, [header, [_title], [quick_btn, [cnlBtn], [svBtn]]], [body]]);
    const append = (child, title) => {
      titlePlace.textContent = title;
      const app = DOM.select(".app");
      // body.innerHTML = '';
      body.appendChild(child);
      app.appendChild(container);
    };

  return append;
})();


eventHandler.subscribe('open-pop-up', () =>{
  const popUp = DOM.select('.pop-up');
  popUp.classList.add('show');
  setTimeout(() => {
    popUp.classList.add('showed');
    popUp.classList.remove('show');
  }, 0)
})

eventHandler.subscribe('close-pop-up', event => {
  const popUp = DOM.select('.pop-up');
  popUp.classList.remove('showed');
  popUp.classList.add('show');
  setTimeout(() => {
    popUp.classList.remove('show');
    popUp.remove();
  }, 300)
})

eventHandler.subscribe('save-button', event => {
  const element = event.target;
  const parent = element.closest('.pop-up');
  const form = DOM.select('form', parent);
  if(form.classList.contains('list-form')){
  console.log(data);
  eventHandler.publish('list-form-submit', event)
}else if(form.classList.contains('task-form')){
  eventHandler.publish('task-form-submit', event)
}
eventHandler.publish('close-pop-up');
});

eventHandler.subscribe('cancel-button', event => {
  const form = DOM.select('form');
  setTimeout(() => {
    form.reset();
    form.remove();
  }, 300)
  eventHandler.publish('close-pop-up');
});

export { loadPopUp };