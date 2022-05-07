const contents = [];
const arrows = [];

for (let i = 1; i < 5; i++) {
  contents.push(document.querySelector(`#content-${i}`));
}

for (let i = 1; i < 5; i++) {
  arrows.push(document.querySelector(`#arrow-${i}`));
}

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (elem) => {
    const content = contents[elem.target.id[elem.target.id.length - 1] - 1];
    content.classList.toggle("constructions__item-content--collapsed");
  });
});
