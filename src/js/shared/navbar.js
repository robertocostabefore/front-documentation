import { changeBodyColorScheme, setBodyToLightMode } from "./changeColorScheme.js"

const navbarHtmlElement = document.getElementById('navbar')

const navbarOptionsByView = {
  documentation: {
    class: "front-header",
    img: "assets/images/before-small-white-logo.svg",
    options: [
      {
        title: "Acordos",
        href: "#agreements",
        class: "nav-link"
      },
      {
        title: "Sobre nós",
        href: "#about",
        class: "nav-link"
      },
      {
        title: "Empresa",
        href: "#enterprise",
        class: "nav-link"
      },
      {
        title: "Doc Hub",
        href: "hub.html",
        class: "nav-link hub"
      },
      {
        title: "Doc PAP",
        href: "pap.html",
        class: "nav-link pap"
      },
    ]
  },
  hub: {
    class: "hub-header",
    img: "assets/images/hub-small-white-logo.svg",
    options: [
      {
        title: "Acordos",
        href: "#agreements",
        class: "nav-link"
      },
      {
        title: "Sobre",
        href: "#about",
        class: "nav-link"
      },
      {
        title: "Metas",
        href: "#goals",
        class: "nav-link"
      },
      {
        title: "Get Started",
        href: "#get-started",
        class: "nav-link"
      },
      {
        title: "Doc PAP",
        href: "pap.html",
        class: "nav-link pap"
      },
      {
        title: "Doc Front",
        href: "documentation.html",
        class: "nav-link front"
      },
    ]
  },
  pap: {
    class: "pap-header",
    img: "assets/images/pap-small-white-logo.svg",
    options: [
      {
        title: "Acordos",
        href: "#agreements",
        class: "nav-link"
      },
      {
        title: "Sobre",
        href: "#about",
        class: "nav-link"
      },
      {
        title: "Doc Hub",
        href: "hub.html",
        class: "nav-link hub"
      },
      {
        title: "Doc Front",
        href: "documentation.html",
        class: "nav-link front"
      },
    ]
  },
}

const fetchNavbarComponent = () => {
  fetch('./components/navbar.html')
    .then(response => response.text())
    .then(html => {
      navbarHtmlElement.innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar navbar:', error));
}

const createNavbarOptionsList = view => {
  const itemsList = document.createElement("ul");
  itemsList.className = "navbar-nav";

  navbarOptionsByView[view]?.options.forEach((option) => {
    // Cria o item da lista
    const item = document.createElement("li");
    item.className = "nav-item";

    // Cria o link dentro do item
    const itemContent = document.createElement("a");
    itemContent.className = option.class;
    itemContent.href = option.href;
    itemContent.textContent = option.title;

    // Monta a estrutura
    item.appendChild(itemContent);
    itemsList.appendChild(item);
  });

  return itemsList
}

const populateNavbar = (view) => {
  const navbarNav = document.getElementById("navbar-items");
  const navbarTitle = document.getElementById("navbar-title");
  if (!navbarNav || !navbarTitle) {
    setTimeout(() => {
      populateNavbar(view)
    }, 50);
    return
  }

  const viewData = navbarOptionsByView[view];
  if (!viewData) return;
  
  navbarHtmlElement.className = viewData.class
  
  const logo = navbarTitle.querySelector("img");
  if (logo) logo.src = viewData.img;

  navbarNav.innerHTML = "";

  // Cria a lista principal
  const itemsList = createNavbarOptionsList(view)

  const buttonChangeColorScheme = document.createElement('button');
  buttonChangeColorScheme.id = 'btn-change-scheme';
  buttonChangeColorScheme.addEventListener('click', changeBodyColorScheme);

  navbarNav.appendChild(itemsList);
  navbarNav.appendChild(buttonChangeColorScheme);
};

const handleRenderNavbar = (view) => {
  fetchNavbarComponent()

  populateNavbar(view)
}

setBodyToLightMode()

export {
  handleRenderNavbar
}