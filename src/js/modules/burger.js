class Burger {
  constructor(burger, modal, menuBody) {
    this.body = document.querySelector("body");
    this.burger = burger;
    this.modal = modal;
    this.menuBody = menuBody;
    this.init();
  }

  init() {
    const menuButton = document.querySelector(`.${this.burger}`);
    menuButton.addEventListener("click", (e) => this.btnAction());
    document.addEventListener("click", (e) => {
      this.close(e);
    });
  }

  btnAction() {
    const menu = document.querySelector(`.${this.modal}`);
    const body = this.body;

    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex";
      body.style.overflow = "hidden";
    } else {
      menu.style.display = "none";
      body.style.overflow = "auto";
    }
  }

  close(e) {
    const menu = document.querySelector(`.${this.modal}`);
    const body = this.body;
    
    if (!e.target.closest(`.${this.menuBody}`) && !e.target.classList.contains(this.burger)) {
      menu.style.display = "none";
      body.style.overflow = "auto";
    }
  }
}

export default Burger;
