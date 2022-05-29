

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
// import { createListItem } from './js/Components/std-list-item';



/*
?------pinned tasks---------
*/


eventHandler.publish('initialize');

eventHandler.publish("view-list");