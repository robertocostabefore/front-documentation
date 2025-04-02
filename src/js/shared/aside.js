const asideHtmlElement = document.getElementById('aside')

const asideOptionsByView = {
  documentation: {
    options: [
      {
        title: "# ACORDOS",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "# Acordos",
            href: "#agreements"
          }
        ]
      },
      {
        title: "# SOBRE",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "# Sobre",
            href: "#about"
          }
        ]
      },
      {
        title: "SOBRE A EMPRESA",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "# Quem somos",
            href: "#who-are-we"
          },
          {
            title: "# Nosso propósito",
            href: "#purpose"
          },
          {
            title: "# Nossos valores",
            href: "#our-values"
          },
          {
            title: "# Expectativas",
            href: "#what-we-look-for-in-our-professionals"
          }
        ]
      }
    ]
  },
  hub: {
    options: [
      {
        title: "ACORDOS",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "# Acordos",
            href: "#agreements"
          },
          {
            title: "# Sobre",
            href: "#about"
          },
          {
            title: "# metas",
            href: "#goals"
          }
        ]
      },
      {
        title: "GET STARTED",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "# Instalação",
            href: "#instalation"
          },
          {
            title: "# Execução",
            href: "#execution"
          },
          {
            title: "# Novo Cliente",
            href: "#new-client"
          }
        ]
      },
      {
        title: "COMANDOS ÚTEIS",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "comming soon...",
            href: "#utils"
          }
        ]
      },
      {
        title: "TECNOLOGIAS",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "comming soon...",
            href: "#technologies"
          },
        ]
      },
      {
        title: "ERROS",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "Tela branca",
            href: "#white-screen"
          }
        ]
      },
    ]
  },
  pap: {
    options: [
      {
        title: "",
        ulClass: "list-unstyled fw-semibold pb-2",
        options: [
          {
            title: "",
            href: ""
          }
        ]
      }
    ]
  },
}

const fetchAsideComponent = () => {
  fetch('./components/aside.html')
    .then(response => response.text())
    .then(html => {
      asideHtmlElement.innerHTML = html
    })
    .catch(error => console.error('Erro ao carregar aside:', error))
}

const createItemLink = ({ href, title }) => {
  const itemLink = document.createElement("a")
  itemLink.href = href
  itemLink.textContent = title
  itemLink.className = "bd-links-link"

  return itemLink
}

const createListItem = option => {
  const item = document.createElement("li")

  const itemContent = createItemLink(option)

  item.appendChild(itemContent)

  return item
}

const createList = ({ ulClass, options }) => {
  const itemList = document.createElement("ul")
  itemList.className = ulClass

  options.forEach(option => {
    const item = createListItem(option)
    itemList.appendChild(item)
  })

  return itemList
}

const populateAside = (view) => {
  const asideItems = document.getElementById("aside-items")

  if (!asideItems) {
    setTimeout(() => populateAside(view), 100)
    return
  }

  asideOptionsByView[view]?.options.forEach((option) => {
    // Cria o item da lista
    const item = document.createElement("li")
    item.className = "bd-links-group py-2"

    // Cria o Titulo da lista
    const itemTitle = document.createElement("strong")
    itemTitle.className = "bd-links-heading d-flex w-100 align-items-center fw-bold"
    itemTitle.innerHTML = option.title

    // Cria a lista do item
    const itemContent = createList(option)

    // Monta a estrutura
    item.appendChild(itemTitle)
    item.appendChild(itemContent)
    asideItems.appendChild(item)
  })
}

const handleRenderAside = (view) => {
  fetchAsideComponent()

  populateAside(view)
}

export {
  handleRenderAside
}