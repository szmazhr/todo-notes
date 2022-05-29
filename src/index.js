

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
// import { createListItem } from './js/Components/std-list-item';






eventHandler.publish('initialize');

eventHandler.publish("view-list");