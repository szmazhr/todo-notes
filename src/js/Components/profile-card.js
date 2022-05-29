import DOM from "../Modules/domStuff";

function createProfileCard() {
  const [footer, row, avatar, img, info, name, email, setting_gear] =
    DOM.createElementsByClassName(
      ["profile", 'footer'],
      ["row"],
      ["avatar"],
      ["img", "img"],
      ["info"],
      ["name"],
      ["email"],
      ["setting-gear"]
    );

  DOM.addAttributes(img,
    {src: "https://avatars0.githubusercontent.com/u/1209898?s=460&v=4",
    alt: "avatar"});
  DOM.textNode('Shahzar Mazhar', 'span', name);
  DOM.textNode('mohdshahzar.1996@gmail.com', 'span', email);
  DOM.bsIcon('sliders2', setting_gear);

  DOM.bulkAppend(footer, [row, [avatar, [img]], [info, [name], [email]], [setting_gear]]);
  
  return footer;
}

export { createProfileCard };