export default {
  description: "METAS e OBJETIVOS para o projeto do HUB",
  listItems: [
    {
      title: "REFATORAR TODOS OS COMPONENTES .js",
      descriptions: [
        "Migrar todos os componentes .js para Vue.js",
        //como vamos estruturar isso?
      ]
    },
    {
      title: "ATUALIZAR A VERSÃO DO VUE",
      descriptions: [
        "Passar a usar O Vue.js na versão mais recente (3.X)",
        "Cuidado com dependencias 'meo' nobre"
      ]
    },
    {
      title: "ATUALIZAR A VERSÃO DO NODE",
      descriptions: [
        "Node 12? Está muito defasado, é necessário atualizar."
      ]
    },
    {
      title: "REMOVER O ROLLUP",
      descriptions: [
        "Mudar a build do shared/components"
      ]
    },
    {
      title: "COMPONENTIZAR MAIS",
      descriptions: [
        "Tem muita repetição de codigo no hub",
        "Precisamos na refatoração, começar a reutilizar mais"
      ]
    },
    {
      title: "REFATORAR OS FLUXOS (DINAMIZAR)",
      descriptions: [
        "Precisamos reestruturar a venda para diminuir repetição e aumentar a dinamização/personalização"
      ]
    },
    {
      title: "VITE? -- maybe --",
      descriptions: [
        "Bea está analisando a possibilidade dessa mudança",
        "Quero o webpack para remover data-cy"
      ]
    }
  ]
}
