import Clock from '../Modules/clock';
import { settings } from '../Modules/data-management';
import DOM from '../Modules/domStuff';
import eventHandler from '../Modules/event-handler';



const clock = new Clock(settings.clock.format);
eventHandler.subscribe('initialized', () => {
  const parent = (settings.clock.position.split('-')[0] === 'top') ? DOM.select('.app-header') : DOM.select('.app-footer');
  const align = `.${settings.clock.position.split('-')[1]}`;
  const position = DOM.select(align, parent);
  const clockEl = DOM.textNode('{clock}', 'span', position);
  clock.start(clockEl);
  // setTimeout(() => {
  //   clock.stop()
    
  // }, 5000);
})


