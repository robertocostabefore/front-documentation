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

const acessingAppPap = {
  containerId: "container-system-acessing-app",
  description: "Documentação para acessar o PAP no modo APP",
  listItems: [
    {
      title: "Acessando o APP",
      descriptions: [
        "Para acessar o APP do PAP no local, utilize a seguinte URL: <code>http://{URL}/_sys/app.php#/</code>",
        "Para acessar o APP do PAP em BETA, utilize o navegador na visão mobile por meio da Device Toolbar.",
      ]
    },
  ]
}

const acessingBiometryAtt = {
  containerId: "container-system-acessing-biometry-att",
  description: "Documentação para acessar a tela de atualização da Biometria no PAP",
  listItems: [
    {
      title: "Acessando a tela",
      descriptions: [
        "Para acessar a tela de atualização da Biometria no PAP, utilize a seguinte URL: <code>http://{URL}/_sys/biometria/index.php</code>",
        "A partir dela você poderá editar as informações da biometria de uma venda. Para isso, cole o código da venda no campo indicado e clique em <strong>BUSCAR</strong>",
      ]
    },
  ]
}

export default [
  initialDefinitions,
  acessingAppPap,
  acessingBiometryAtt
]