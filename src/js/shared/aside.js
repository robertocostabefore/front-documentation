const asideHtmlElement = document.getElementById('aside')

const asideOptionsByView = {
  documentation: {
    options: [
      {
        title: "TIME",
        href: "#team",
        options: [
          {
            title: "# Acordos",
            href: "#agreements"
          },
          {
            title: "# Boas práticas",
            href: "#good-practices"
          }
        ]
      },
      {
        title: "SOBRE O FRONT",
        href: "#about-us",
        options: [
          {
            title: "# Integrantes",
            href: "#members"
          }
        ]
      },
      {
        title: "SOBRE A EMPRESA",
        href: "#enterprise",
        options: [
          {
            title: "# Quem somos?",
            href: "#who-are-we"
          },
          {
            title: "# Missão",
            href: "#mission"
          },
          {
            title: "# Visão",
            href: "#vision"
          },
          {
            title: "# Propósitos",
            href: "#purpose"
          },
          {
            title: "# Valores",
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
        title: "HUB",
        href: "#about-us",
        options: [
          {
            title: "# Sobre",
            href: "#about"
          },
          {
            title: "# Acordos",
            href: "#agreements"
          },
          {
            title: "# Boas práticas",
            href: "#good-practices"
          },
          {
            title: "# Metas",
            href: "#goals"
          }
        ]
      },
      {
        title: "GET STARTED",
        href: "#get-started",
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
            title: "# Novo cliente",
            href: "#new-client"
          }
        ]
      },
      {
        title: "COMANDOS ÚTEIS",
        href: "#utils",
        options: [
          {
            title: "# Coming soon...",
            href: "#content-utils"
          }
        ]
      },
      {
        title: "TECNOLOGIAS",
        href: "#technologies",
        options: [
          {
            title: "# Coming soon...",
            href: "#content-technologies"
          },
        ]
      },
      {
        title: "ERROS",
        href: "#errors",
        options: [
          {
            title: "# Tela branca",
            href: "#white-screen"
          }
        ]
      },
    ]
  },
  pap: {
    options: [
      {
        title: "PaP",
        href: "#about-us",
        options: [
          {
            title: "# Sobre",
            href: "#about"
          },
          {
            title: "# Acordos",
            href: "#agreements"
          },
          {
            title: "# Boas práticas",
            href: "#good-practices"
          }
        ]
      },
      {
        title: "ARQUITETURA",
        href: "#architecture",
        options: [
          {
            title: "# SQL",
            href: "#architecture-sql",
          }
        ]
      },
      {
        title: "ERROS",
        href: "#errors",
        options: [
          {
            title: "# Identificar erros sun",
            href: "#identify-errors-sun"
          },
          {
            title: "# Identificar erros sun-core",
            href: "#identify-errors-sun-core"
          }
        ]
      },
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

  return itemLink
}

const createListItem = option => {
  const item = document.createElement("li")
  item.className = "bd-links-link"

  const itemContent = createItemLink(option)

  item.appendChild(itemContent)

  return item
}

const createList = ({ options }) => {
  const itemList = document.createElement("ul")
  itemList.className = "list-unstyled fw-semibold pb-2 no-gap"

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
    const itemTitle = document.createElement("a")
    itemTitle.className = "bd-links-heading d-flex w-100 align-items-center fw-bold"
    itemTitle.href = option.href
    itemTitle.textContent = option.title

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