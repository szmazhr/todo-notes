

import '/src/scss/index.scss';
import './js/Modules/data-management';
import eventHandler from './js/Modules/event-handler';
import './js/Components/body';
import './js/Components/content';
import './js/Modules/task-counter';
import './js/Modules/utils';
import './js/Modules/subtasks';
import './js/Modules/toggleTask';
import './js/Modules/active-list';
import './js/Components/clock';
import './js/Components/pop-up';
import './js/Modules/list-manipulator';
import './js/Modules/task-manipulator';
import './js/Modules/dropdown-controller';
import './js/Components/dropdown';
import DOM from './js/Modules/domStuff';
import { loadPopUp } from './js/Components/pop-up';
import { tasks } from './js/Modules/data-management';
import './js/Modules/localStorageManager'
// import { createListItem } from './js/Components/std-list-item';



/*
?------pinned tasks---------
*/


eventHandler.publish('initialize');
eventHandler.publish("view-list");
eventHandler.publish('ready');
