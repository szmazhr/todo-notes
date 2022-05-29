import { addClickListener } from "../Modules/click-handler";
import DOM from "../Modules/domStuff";
import { excerpt } from "../Modules/utils";
import { createIconButton } from "./icon-button";

const buttons = [
  {
    id: 1,
    name: "add-subtask",
    icon: "plus-lg",
  },
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

  DOM.addAttributes(checkbox, {
    type: "checkbox",
    id: task.id,
  });
  const parent = task.getParent();
  checkbox.checked = task.completed;
  label.setAttribute("for", task.id);

  const icon = DOM.bsIcon(parent.icon);

  DOM.textNode(task.title, "span", task_name);
  DOM.textNode(excerpt(task.description, 60), "p", task_note);
  DOM.textNode(parent.title, "span", task_side_note, icon);

  if (task.dueDate) {
    DOM.bsIcon("dot", task_side_note);
    DOM.textNode(task.dueDate, "span", task_side_note);
  }

  if (!_isSubtask) {
    const _count = task.getSubtasks().length;
    const _text = _count > 1 ? `subtasks (${_count})` : `subtask (${_count})`;
    DOM.bsIcon("dot", task_side_note);
    const _a = DOM.textNode(_text, "a", task_side_note);
    _a.setAttribute("href", `#subtasks`);
    if(_count > 0) addClickListener(_a, "subtask-list");
  }

  buttons.forEach((btn) => {
    if (_isSubtask && btn.name == "add-subtask") {
      return;
    }
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
  addClickListener(task_note, "toggleTask");

  return task_card;
}

export { createTask };
