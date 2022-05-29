import DOM from "../Modules/domStuff";
import { createIconButton } from "./icon-button";


function createProfileCard() {
  const [footer, row, avatar, img, info, name, email] =
    DOM.createElementsByClassName(
      ["profile", 'footer'],
      ["row"],
      ["avatar"],
      ["img", "img"],
      ["info"],
      ["name"],
      ["email"],
    );

  DOM.addAttributes(img,
    {src: "https://avatars0.githubusercontent.com/u/1209898?s=460&v=4",
    alt: "avatar"});
  DOM.textNode('Shahzar Mazhar', 'span', name);
  DOM.textNode('mohdshahzar.1996@gmail.com', 'span', email);
  const setting_gear = createIconButton('sliders2', 'setting-gear')
  footer.setAttribute('data-id', 'profile');

  DOM.bulkAppend(footer, [row, [avatar, [img]], [info, [name], [email]], [setting_gear]]);
  
  return footer;
}

export { createProfileCard };