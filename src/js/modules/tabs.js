const content = document.querySelectorAll(".tabs__content-item");
const buttons = document.querySelectorAll(".tabs__btn-item");
const buttonActive = "tabs__btn-item--active";
const contentActive = "tabs__content-item--active";

function tabsInit() {
  content.forEach((contentItem) => {
    contentItem.classList.remove(contentActive);
  });
  const current = document.querySelector(`.${buttonActive}`).dataset.button;
  document.querySelector(`#${current}`).classList.add(contentActive);
}

function tabsReset() {
  buttons.forEach((button) => {
    button.classList.remove(buttonActive);
  });
}

function startTabs() {
  tabsInit();

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      tabsReset();
      e.currentTarget.classList.add(buttonActive);
      tabsInit();
    });
  });
}

startTabs();
