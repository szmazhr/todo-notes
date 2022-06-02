import { addClickListener } from "../Modules/click-handler";
import DOM from "../Modules/domStuff";

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

  const nameField = DOM.createInput('text', 'list-name', 'list-name', 'List Name', 'form-control name-field', iconWrapper);
  const colorField = DOM.createInput('hidden', 'list-color', 'list-color', 'List Color', 'form-control  color-gallery');
  const iconField = DOM.createInput('hidden', 'list-icon', 'list-icon', 'List Icon', 'form-control  icon-gallery');
  const id = DOM.createElements('input');
  DOM.addAttributes(id, {
    type: 'hidden',
    name: 'list-id',
    value: '',
  })
  

  primaryColors.forEach((color) => {
    const divBtn = DOM.createElementsByClassName(
      [`color-display`],
    )
    divBtn.style.backgroundColor = color;
    divBtn.setAttribute('data-color', color);
    colorField.appendChild(divBtn);
    addClickListener(divBtn, 'list-color-selected');
    divBtn.setAttribute('data-id', color);
  })
  Icons.forEach((icon) => {
    const divBtn = DOM.createElementsByClassName(
      [`icon-display`],
    )
    DOM.bsIcon(icon, divBtn);
    divBtn.setAttribute('data-icon', icon);
    iconField.appendChild(divBtn);
    addClickListener(divBtn, 'list-icon-selected');
    divBtn.setAttribute('data-id', icon);

  })

  btn.textContent = 'Delete List';
  btnWrapper.appendChild(btn);

  DOM.bulkAppend(form, [id], [nameField], [colorField], [iconField]);


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