import { addClickListener } from "../Modules/click-handler";
import DOM from "../Modules/domStuff";
import eventHandler from "../Modules/event-handler";

const primaryColors = ['blue', 'orange', 'yellow', 'green', 'red', 'purple'];
const Icons = ['list-ul', 'cart4','bank', 'book', 'controller','dribbble', 'envelope-paper' ]

const loadListForm = (() => {
  const [
    form,
    iconWrapper,
    btnWrapper,
    btn,
  ] = DOM.createElementsByClassName(
    ['list-form', 'form'],
    ['icon-wrapper'],
    ['form-control delete-list'],
    ['delete-button', 'button']

  );

  DOM.bsIcon('list-ul', iconWrapper);

  const nameField = DOM.createInput('text', 'list-name', 'list-name', 'List Name', 'name-field', iconWrapper);
  const colorField = DOM.createInput('hidden', 'list-color', 'list-color', 'List Color', 'color-gallery');
  const iconField = DOM.createInput('hidden', 'list-icon', 'list-icon', 'List Icon', 'icon-gallery');
  

  primaryColors.forEach((color, i) => {
    const divBtn = DOM.createElementsByClassName(
      [`color-display ${(i === 0) ? 'selected' : ''}`],
    )
    divBtn.style.backgroundColor = color;
    divBtn.setAttribute('data-color', color);
    colorField.appendChild(divBtn);
    addClickListener(divBtn, 'list-color-selected');
    divBtn.setAttribute('data-id', color);
  })
  Icons.forEach((icon, i) => {
    const divBtn = DOM.createElementsByClassName(
      [`icon-display ${(i === 0) ? 'selected' : ''}`],
    )
    DOM.bsIcon(icon, divBtn);
    divBtn.setAttribute('data-icon', icon);
    iconField.appendChild(divBtn);
    addClickListener(divBtn, 'list-icon-selected');
    divBtn.setAttribute('data-id', icon);

  })

  btn.textContent = 'Delete List';
  btnWrapper.appendChild(btn);

  DOM.bulkAppend(form, [nameField], [colorField], [iconField]);


  form.addEventListener('submit', (event) => {
    event.preventDefault();
  })


  return (edit) => {
    if (edit) {
      form.appendChild(btnWrapper);
    }
    return form;
  };
})();

export { loadListForm }