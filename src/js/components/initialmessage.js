/**
 * @param {object} data contains the expected page content data
 * returns a default component to show the provided information.
 */
const initialMessageComp = (data) => {
  const section = document.createElement('section');

  if (data.title) {
    let title = document.createElement('h1');
    title.classList.add('text-block-comp__title');
    title.textContent = data.title;
    section.appendChild(title);
  }

  if (data.text) {
    let text = document.createElement('p');
    text.classList.add('text-block-comp__text');
    text.textContent = data.text;
    section.appendChild(text);
  }

  section.classList.add('text-block-comp__container');
  return section;
};

export { initialMessageComp };
