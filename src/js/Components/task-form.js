/*
    <form class="task-form">
      <input type="hidden" id="task-id" name="task-id">

      <div class="form-control">
        <input type="text" id="task-title" name="title" placeholder="Task Name">
        <label for="task-title"></label>
      </div>
      <div class="form-control">
        <textarea type="text" rows="3" id="task-description" name="description" placeholder="Description"></textarea>
        <label for="task-description"></label>
      </div>
      <div class="form-control">
        <input type="text" onfocus="(this.type='datetime-local')" id="task-dueDate" name="dueDate" placeholder="dd/mm/yyyy, --:--">
        <label for="task-dueDate"></label>
      </div>
        <div class="form-control">
          <legend>Priority</legend>
          <div class="radio">
            <input type="radio" id="task-priority-high" name="priority" value="high">
            <label for="task-priority-high">High Priority</label>
          </div>
          <div class="radio">  
            <input type="radio" id="task-priority-normal" name="priority" value="normal" selected>
            <label for="task-priority-normal">Normal Priority</label>
          </div>
          <div class="radio">
            <input type="radio" id="task-priority-low" name="priority" value="low">
            <label for="task-priority-low">Low Priority</label>
          </div>
        </div>
    </form>

    
*/

import DOM from "../Modules/domStuff";

const loadTaskForm = (() => {
  const priorityOption = ["High", "Normal", "Low"];
  const [form, descWrapper, descInput, priority, priorityLabel] =
    DOM.createElementsByClassName(
      ["task-form", "form"],
      ["form-control"],
      ["", "textarea"],
      ["form-control"],
      ["", "legend"]
    );

  const title = DOM.createInput(
    "text",
    "title",
    "task-title",
    `Name`,
    "form-control"
  );
  const dueDate = DOM.createInput(
    "text",
    "dueDate",
    "task-dueDate",
    "dd/mm/yyyy, --:--",
    "form-control"
  );
  priority.appendChild(priorityLabel);
  priorityLabel.textContent = "Priority";

  priorityOption.forEach((option, i) => {
    const element = DOM.createInput(
      "radio",
      "priority",
      `task-priority-${option.toLowerCase()}`,
      `${option} Priority`,
      "radio"
    );
    const _label = DOM.select("label", element);
    const _radio = DOM.select("input", element);
    DOM.addAttributes(_radio, {
      value: i + 1,
    });
    _label.textContent = option;
    priority.appendChild(element);
  });

  const id = DOM.createElements("input");
  const dateInput = DOM.select("input", dueDate);
  dateInput.setAttribute("onfocus", '(this.type="datetime-local")');

  DOM.addAttributes(id, {
    type: "hidden",
    name: "task-id",
    value: "",
  });
  DOM.addAttributes(descInput, {
    type: "text",
    rows: "6",
    id: "task-description",
    name: "description",
    placeholder: "Description",
  });

  DOM.bulkAppend(form, [id], [title], [descWrapper, [descInput]], [dueDate]);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  return (subtask) => {
    if (!subtask) form.appendChild(priority);
    return form;
  };
})();

export { loadTaskForm };
