/*
 * Module: DOM related functions
 * Responsibility: Document Object Manipulation
 */

const DOM = {
  select: (selector, context) => {
    return (context || document).querySelector(selector);
  },

  selectAll: (selector, context) => {
    return (context || document).querySelectorAll(selector);
  },

  createElements: (...elementName) => {
    const _result = [];

    elementName.forEach((element) => {
      const _element = document.createElement(element);
      _result.push(_element);
    });

    if (_result.length == 1) return _result[0];
    return _result;
  },

  createElementsByClassName(...pairsOfElementClasses) {
    const result = [];

    pairsOfElementClasses.forEach((obj) => {
      const _elementName = (obj.length > 1 && obj[1]) ? obj[1] : 'div';
      const _element = DOM.createElements(_elementName);
      _element.className = obj[0];
      result.push(_element);
    });

    if (result.length == 1) return result[0];
    return result;
  },

  addAttribute: (qualifiedName, ...pairsOfNodeAttribute) => {
    pairsOfNodeAttribute.forEach((e) => {
      e[0].setAttribute(qualifiedName, e[1]);
    });
  },
  addAttributes: (element, attributes) => {
    for (const attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  },

  bulkAppend(parent, ...children){
    if (!children) return;

    children.forEach((child) => {
      parent.appendChild(child[0]);

      if (child[1]) {
        const [newParent] = child.splice(0, 1);
        this.bulkAppend(newParent, ...child);
      }
    });
  },
  // setTextContent(...pairsOfElementText){
  //   pairsOfElementText.forEach((item) => {
  //     this.textNode(item[0], item[1]);
  //     item[0].textContent = item[1];
  //   });
  // },
  textNode(text, elementName, parent) {
    const _element = this.createElements(elementName);
    _element.textContent = text;
    if(parent) parent.appendChild(_element);
    if(!parent) return _element;
  },

  bsIcon(iconName, parent) {
    const _element = this.createElements('i');
    _element.className = `bi bi-${iconName}`;
    return (parent) ? parent.appendChild(_element) : _element;
  }
};
export default DOM;
