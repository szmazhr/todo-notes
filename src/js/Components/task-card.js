// const fns = require("date-fns");
import { format, parseISO } from "date-fns";
import { addClickListener } from "../Modules/click-handler";
import { menuOptions } from "../Modules/data-management";
import DOM from "../Modules/domStuff";
import eventHandler from "../Modules/event-handler";
import { excerpt } from "../Modules/utils";
import { createIconButton } from "./icon-button";

const buttons = [
  // {
  //   id: 1,
  //   name: "add-subtask",
  //   icon: "plus-lg",
  // },
  {
    id: 2,
    name: "edit-task",
    icon: "pencil",
  },
  {
    id: 3,
    name: "delete-task",
    icon: "trash",
  },
  {
    id: 4,
    name: "menu",
    icon: "three-dots-vertical",
  },
];

function createTask(task) {
  const _isSubtask = task.parentId.match(/^[t-]/i) ? true : false;

  //creating required elements
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
    [`${_isSubtask ? "subtask-card" : "task-card"}`],
    ["task-body"],
    ["task-status"],
    ["checkbox", "input"],
    ["label"],
    ["task-info"],
    ["task-name"],
    ["task-note"],
    ["task-side-note"],
    ["task-action"]
  );

  //defining task / subtask id
  const _id = !_isSubtask ? `t-${task.id}` : `s-${task.id}`;

  //fetching parent
  const parent = task.getParent();

  //setting status checkbox and label attributes
  label.setAttribute("for", _id);
  DOM.addAttributes(checkbox, {
    type: "checkbox",
    id: _id,
  });

  //status completed/incomplete
  checkbox.checked = task.completed;

  checkbox.addEventListener("change", (event) => {
    eventHandler.publish('task-status-change', task);
  })

  //adding title under the span element
  DOM.textNode(task.title, `${!_isSubtask ? "h3" : "h4"}`, task_name);

  //adding description excerpt under the p element
  let p = DOM.textNode(excerpt(task.description, 60), "p", task_note);

  if (!_isSubtask) {
    //creating icon element for list icon in main task
    const icon = DOM.bsIcon(parent.icon);

    //adding list name including it icon
    DOM.textNode(parent.title, "span", task_side_note, icon);

    //dot after that
    DOM.bsIcon("dot", task_side_note);
  }

  if (task.dueDate) {
    //if task had dueDate add it
    DOM.textNode(format(parseISO(task.dueDate), 'dd/MM/yyyy hh:mm'), "span", task_side_note);
  }
  
  if (!_isSubtask && menuOptions.isSubtaskEnabled) {
    DOM.bsIcon("dot", task_side_note);
    // if task is main task, add link to toggle subtask
    //subtasks counter
    const _count = task.getSubtasks().length;
    //creating text according to count
    const _text = _count > 1 ? `subtasks (${_count})` : `subtask (${_count})`;
    const _a = DOM.textNode(_text, "a", task_side_note);
    _a.setAttribute("href", `#subtasks`);
    if (_count > 0) addClickListener(_a, "subtask-list");
  }
  const priority = DOM.createElementsByClassName([`task-priority priority-${task.priority}`]);
  task_card.appendChild(priority);

  buttons.forEach((btn) => {
    if (_isSubtask && btn.name == "add-subtask") return;
    task_action.append(createIconButton(btn.icon, btn.name, btn.name));
  });

  DOM.bulkAppend(task_card, [
    task_body,
    [task_status, [checkbox], [label]],
    [task_info, [task_name], [task_note], [task_side_note]],
    [task_action],
  ]);

  const taskId = !_isSubtask ? `t-${task.id}` : `s-${task.id}`;
  task_card.setAttribute("data-id", taskId);
  addClickListener(p, "toggleTask");

  return task_card;
}

eventHandler.subscribe('render-task', task => {
  const main = DOM.select(".body .main-content");
  main.append(createTask(task));
})

// export { createTask };
