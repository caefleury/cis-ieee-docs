// declarações dos elementos a serem utilziados no script
const toggleSideBarElements = document.querySelectorAll(".__toggle-sidebar"),
  buttonsDocument = document.querySelectorAll(["a", "button"]),
  containerSideBar = document.querySelector(".container-sidebar"),
  toggleThemeButton = document.querySelector(".__toggle-theme"),
  body = document.body;

// permite o usuário usar o menu responsivo com sidebar
function toggleContainerSideBar() {
  containerSideBar.classList.toggle("show-container-sidebar");

  if (containerSideBar.classList.contains("show-container-sidebar")) {
    buttonsDocument.forEach((element) => {
      if (!element.classList.contains("__button-sidebar")) {
        element.setAttribute("tabindex", "-1");
      }
    });
  } else {
    buttonsDocument.forEach((element) => {
      if (!element.classList.contains("__button-sidebar")) {
        element.removeAttribute("tabindex");
      }
    });
  }
}

toggleSideBarElements.forEach((element) => {
  element.addEventListener("click", toggleContainerSideBar);
});

// seta o tema inicial do site para o usuário
(function () {
  const theme = localStorage.getItem("doc_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (theme === "light" || (!theme && !prefersDark)) {
    body.classList.remove("dark");
    toggleThemeButton.classList.remove("dark");
  } else {
    body.classList.add("dark");
    toggleThemeButton.classList.add("dark");
  }
})();

// permite o usuário alterar o tema
toggleThemeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleThemeButton.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("doc_theme", "dark");
  } else {
    localStorage.setItem("doc_theme", "light");
  }
});
