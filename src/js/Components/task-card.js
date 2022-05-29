import DOM from "../Modules/domStuff";
import { createIconButton } from "./icon-button";


const subtasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is a task",
    parent: "t-1",
    dueDate: "2020-01-01",
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is a task",
    parent: "t-1",
    dueDate: "2020-01-01",
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is a task",
    parent: "t-3",
    dueDate: "2020-01-01",
  },
];


const buttons = [
  {
    id: 1,
    name: 'add-subtask',
    icon: 'plus-lg',
  },
  {
    id: 2,
    name: 'edit-task',
    icon: 'pencil',
  },
  {
    id: 3,
    name: 'delete-task',
    icon: 'trash',
  },
]

function createTask(task) {
  const _isSubtask = (task.parent.match(/^[t]/i)) ? true : false;
  const [
    task_card,
    task_body,
    task_status,
    checkbox,
    label,
    task_info,
    task_name,
    task_note,
    task_side_note,
    task_action,
  ] = DOM.createElementsByClassName(
    [`${_isSubtask ? 'subtask-card' : 'task-card'}`],
    ["task-body"],
    ["task-status"],
    ["checkbox", 'input'],
    ["label"],
    ["task-info"],
    ["task-name"],
    ["task-note"],
    ["task-side-note"],
    ["task-action"]
  );

  DOM.addAttributes(checkbox, {
    type: 'checkbox',
    id: task.id,
  })

  label.setAttribute('for', task.id);

  DOM.textNode(task.title, 'span', task_name);
  DOM.textNode(task.description, 'span', task_note);
  DOM.textNode(task.parent, 'span', task_side_note);

  if(task.dueDate) {  
    DOM.bsIcon('dot', task_side_note);
    DOM.textNode(task.dueDate, 'span', task_side_note);
  }

  buttons.forEach(btn => {
    if(_isSubtask && btn.name == 'add-subtask') {return;}
    task_action.append(createIconButton(btn.icon, btn.name, btn.name));
  })

  DOM.bulkAppend(
    task_card,
    [task_body, [task_status, [checkbox], [label]], [task_info, [task_name], [task_note], [task_side_note]],
    [task_action]]
  );

  
    if(task.hasOwnProperty('subtask') && task.subtask.length > 0 && !_isSubtask) {
      task.subtask.forEach(i => {
        let subtask;
        subtasks.forEach(s => {
          if(s.id === i) {
            subtask = s;
            return;
          }
        })
        const _subtask = createTask(subtask);
        task_card.append(_subtask);
      });
    }

  return task_card;
}

export { createTask }