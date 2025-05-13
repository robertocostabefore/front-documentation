const interfacePap = {
  containerId: "container-components-interface",
  description: "A principal forma que temos de buscar e renderizar conteúdo HTML contido no backend, sendo essencial para diversas telas dentro do sistema como, por exemplo: cadastros, menus, importações e a tela de scripts.",
  listItems: [
    {
      title: "O que é",
      descriptions: [
        "Componente utilizado nas rotas que contêm #interface em suas URLs.",
        "<strong>Exemplo:</strong> https://{URL}/_sys/main.php#interface"
      ],
    },
    {
      title: "O que faz",
      descriptions: [
        "Responsável por chamar métodos AJAX que retornam conteúdo HTML vindo do backend e, também, por apresentar esse conteúdo no front-end para o usuário.",
      ],
    },
    {
      title: "Como funciona",
      descriptions: [
        "Sempre que formos redirecionados para a rota de nome interface através da instrução <strong>this.$router.push({name: ‘interface’, param, param})</strong> este componente será renderizado, o qual receberá os parâmetros passados na rota como props, sendo elas: <strong>parameters e callback</strong>.",
        "Assim que é montado, o componente verifica a existência da <strong>prop parameters</strong> e, caso exista, ele utiliza o <strong>método Ajax _makeRequest2</strong>, caso contrário, utiliza o <strong>goToPage</strong>, o qual implementa o  <strong>método Ajax getPage</strong>. Também monitora a interface atual através de um watch e, caso haja uma mudança na interface, chama o  <strong>método goToPage</strong>.",
        "Em ambos os casos, a div de id interfaceGeral fica visível, com o intuito de que o conteúdo HTML retornado pelas funções citadas acima seja exibido. Ao sairmos da rota de #interface, esse componente volta a ocultar a interfaceGeral, para que ela não se sobressaia às demais telas do sistema.",
      ],
    },
  ]
}


export default [
  interfacePap
]

