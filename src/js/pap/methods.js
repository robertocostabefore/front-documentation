const _makeRequest2 = {
  containerId: "container-methods-makerequest2",
  description: "Realiza uma requisição passando um conjunto de dados para obter um HTML como resposta.",
  listItems: [
    {
      title: "Parâmetros",
      descriptions: [
        "<strong>url (String)</strong> - url da requisição;",
        "<strong>div (String)</strong> - div a ser manipulada dentro do método;",
        "<strong>parameters (objeto)</strong> - Dados a serem enviados na requisição;",
      ],
      readMore: [
        "<strong>callback (String ou Função)</strong> - Função chamada ao completar a requisição;",
        "<strong>edicaoBKO (Booleano)</strong> - Flag para verificar se o BKO está editando uma venda;"
      ]
    },
    {
      title: "Descrição",
      descriptions: [
        "Ocorre a limpeza dos campos de input da modal da div atual;",
        "O Tratamento do <strong>parâmetro url</strong> de acordo com os módulos do vue;",
        "O mapeamento e tratamento do history do navegador;",
      ],
      readMore: [
        `O método verifica se deve nos levar para a rota do <strong><a href="pap.html#components-interface">componente de interface</a></strong>;`,
        "Realiza uma requisição ajax que retornar um HTML a ser exibido."
      ]
    },
    {
      title: "Configurações da requisição AJAX",
      descriptions: [
        "<strong>url</strong>: utiliza o parâmetro url como a URL da requisição;",
        "<strong>método</strong>: POST;",
        "<strong>dataType</strong>: HTML;",
      ],
      readMore: [
        "<strong>data(conteúdo da requisição)</strong>: Passa o parâmetro parameters como conteúdo;",
        "<strong>beforeSend</strong>: <br/>- Evento ajax disparado antes da requisição ser enviada;<br/>- Utilizado para aplicar a animação .slideDown no elemento html com id load;",
        "<strong>complete</strong>: <br/>- Evento ajax disparado assim que uma callback ajax de success ou error acontece; <br/>- Responsável por renovar a sessão do usuário e aplicar o método .slideUp para animar a altura do elemento html com id load. <br/>- Caso o parâmetro callback seja uma função, ele será chamado;",
        "<strong>success</strong>: <br/>- Evento ajax disparado quando a requisição é finalizada com sucesso; <br/>- Inserimos o parâmetro data desse evento(dados retornados pela requisição) dentro do parâmetro div; <br/>- Tratamos o restante da requisição atual de acordo com nossa div; <br/>- Renovamos a sessão do usuário;",
        "<strong>error</strong>: <br/>- Evento ajax disparado quando a requisição é finalizada com erro; <br/>- Verificamos se devemos renovar a sessão do usuário ou apenas mostrar um mensagem de erro para o mesmo;"
      ]
    },
  ]
}

const getPage = {
  containerId: "container-methods-getpage",
  description: "Realiza uma requisição para obter um HTML como resposta.",
  listItems: [
    {
      title: "Parâmetros",
      descriptions: [
        "<strong>url (String)</strong> - url da requisição;",
        "<strong>div (String)</strong> - div a ser manipulada dentro do método;",
        "<strong>callback (String ou função)</strong> - Função chamada ao completar a requisição;",
      ],
    },
    {
      title: "Descrição",
      descriptions: [
        "Ocorre o Tratamento do <strong>parâmetro url</strong> de acordo com os módulos do vue;",
        "Realizamos redirecionamentos para componentes vue se necessário;",
        "Verificamos se a requisição (URL) atual já foi realizada anteriormente para barrá-la ou não;",
      ],
      readMore: [
        "Ocorre o mapeamento e tratamento do history do navegador;",
        "Realiza uma requisição ajax que retornar um HTML a ser exibido."
      ]
    },
    {
      title: "Configurações da requisição AJAX",
      descriptions: [
        "<strong>url</strong>: utiliza o parâmetro url como a URL da requisição;",
        "<strong>método</strong>: GET;",
        "<strong>dataType</strong>: HTML;",
      ],
      readMore: [
        "<strong>data(conteúdo da requisição)</strong>: Passa o parâmetro parameters como conteúdo;",
        "<strong>beforeSend</strong>: <br/>- Evento ajax disparado antes da requisição ser enviada;<br/>- Utilizado para aplicar a animação .slideDown no elemento html com id load; <br/>- Desabilita inputs com o atributo id precedido por btnSalvar; <br/>- Chama o parâmetro callback para dizer que a requisição ainda não foi finalizada;",
        "<strong>complete</strong>: <br/>- Evento ajax disparado assim que uma callback ajax de success ou error acontece; <br/>- Responsável por renovar a sessão do usuário e aplicar o método .slideUp para animar a altura do elemento html com id load. <br/>- Habilita novamente inputs com o atributo id precedido por btnSalvar; <br/>- Chama o parâmetro callback dizendo que a requisição foi finalizada;",
        "<strong>success</strong>: <br/>- Evento ajax disparado quando a requisição é finalizada com sucesso; <br/>- Inserimos o parâmetro data desse evento(dados retornados pela requisição) dentro do parâmetro div; <br/>- Tratamos o restante da requisição atual de acordo com nossa div; <br/>- Renovamos a sessão do usuário;",
        "<strong>error</strong>: <br/>- Evento ajax disparado quando a requisição é finalizada com erro; <br/>- Verificamos se devemos renovar a sessão do usuário ou apenas mostrar um mensagem de erro para o mesmo;"
      ]
    },
  ]
}

export default [
  _makeRequest2,
  getPage
]