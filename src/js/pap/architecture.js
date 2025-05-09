const sql = {
  containerId: "container-architecture-sql",
  description: "Sobre a pasta _db no projeto SUN",
  listItems: [
    {
      title: "Comandos SQL a serem executados",
      descriptions: [
        "Em cards que possuem back-end, ao dar pull no card/épico verificar se há arquivos SQL a serem executados",
        "Dentro da pasta '_db' há arquivos sql, cada um corresponde a um respectivo banco de dados",
      ],
    },
    {
      title: "pap.sql",
      descriptions: [
        "Arquivo 'pap.sql' corresponde ao banco das UFs",
        "então ao executar deve-se selecionar o(os) bancos da(das) UFs para executa-los corretamente",
        "<strong>Exemplo</strong>: sun_varejo_ms, sun_varejo_mt (open query)",
        // adicionar nomes dos bancos, adicionar tmbm que por isso é mais simples executar no script do sistema...
      ]
    },
    {
      title: "sun.sql",
      descriptions: [
        "Arquivo 'sun.sql' corresponde ao banco sun, então deve-se executá-los no banco => sun",
        "<strong>Exemplo</strong>: sun (open query)",
      ]
    },
    {
      title: "relatorios.sql",
      descriptions: [
        "Arquivo 'relatorios.sql' corresponde ao banco sun_relatorios, então deve-se executá-los no banco => sun_relatorios",
        "<strong>Exemplo</strong>: sun_relatorios (open query)",
      ]
    },
    {
      title: "Pasta 'executados'",
      descriptions: [
        "Pasta 'executados' corresponde ao histórico dos comandos SQL's",
        "Ou seja, são de cards que já foram aprovados e estão mergeados na branch master",
      ]
    },
  ]
}

export default [
  sql
]