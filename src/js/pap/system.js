const initialDefinitions = {
  containerId: "container-system-initialdefinition",
  description: "Documentação das principais requisições feitas ao realizar login na plataforma PaP Mobile.",
  listItems: [
    {
      title: "Requisição listarMenus",
      descriptions: [
        "<strong>Método http</strong>: GET",
        "<strong>Local de chamada</strong>: MENU LATERAL",
        "<strong>URL</strong>: http://{URL}/_api/router.php?action=listarMenus",
      ],
      readMore: [
        "Essa requisição é responsável por buscar e retornar os menus e os submenus que estarão disponíveis para o usuário acessar, eles são condicionados de acordo com as permissões do usuário, tendo essa verificação feita exclusivamente no backend;",
        "Assim que o front recebe esses valores ele é capaz de mapeá-los para exibir o menu lateral com os ícones e rotas de cada menu e submenu."
      ]
    },
    {
      title: "Requisição configuração",
      descriptions: [
        "<strong>Método http</strong>: GET",
        "<strong>Local de chamada</strong>: MENU LATERAL",
        "<strong>URL</strong>: http://{URL}/_api/router.php?action=configuracao",
      ],
      readMore: [
        "Essa requisição é responsável por buscar e retornar as configurações da home, onde a partir dela sabemos:",
        "Atalhos que devemos mostrar ao usuário;",
        "Permissões da home que o usuário possui;",
        "Último login realizado;",
        "Nível de acesso do usuário;",
        "Link do chat do suporte;",
        "Todas essas informações são salvas na <strong>store home.store.js.</strong>"
      ]
    },
    {
      title: "Requisição buscarUsuarioPermissão",
      descriptions: [
        "<strong>Método http</strong>: GET",
        "<strong>Local de chamada</strong>: HOME",
        "<strong>URL</strong>: http://{URL}/_api/router.php?action=buscarUsuarioPermissao&feature=gestaoDeLeads",
      ],
      readMore: [
        "Requisição responsável por buscar um conjunto de permissões para um determinado módulo, indicando em cada uma se o usuário possui ou não a permissão;",
        "Para identificar o módulo passamos o <strong>parâmetro feature</strong> com o <strong>nome do módulo</strong> em questão;",
        "No login em específico, utilizamos essa requisição para verificar as permissões do módulo de gestão de leads do usuário, passando assim, o parâmetro feature com o valor gestaoDeLeads."
      ]
    },
    {
      title: "Requisição infoUsuarioLogado",
      descriptions: [
        "<strong>Método http</strong>: GET",
        "<strong>Local de chamada</strong>: HOME",
        "<strong>URL</strong>: http://{URL}/_api/router.php?action=infoUsuarioLogado",
      ],
      readMore: [
        "Requisição responsável por retornar os dados do usuário atual e popular tanto a store de usuário - <strong>usuario.store.js</strong> - quanto a <strong>sessionStorage.</strong>"
      ]
    },
  ]
}


export default [
  initialDefinitions
]