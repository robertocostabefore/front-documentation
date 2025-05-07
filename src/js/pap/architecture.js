export default {
  description: "Estrutura e definiçoes do projeto",
  architecture: [
    {
      title: "Comandos SQL a serem executados",
      descriptions: [
        '<strong>Em cards que possuem back-end, ao dar pull no card/épico verificar se há arquivos SQL a serem executados</strong>',
        `Dentro da pasta '_db' há arquivos sql, cada um corresponde a um respectivo banco de dados: `,
        `Arquivo 'pap.sql' corresponde ao banco das UFs, então ao executar deve-se selecionar o(os) bancos antes da(das) UFs do servidor SUN antes de executar os comandos, após isso poderá executa-los corretamente`,
        '<strong>Exemplo</strong>: sun_varejo_ms, sun_varejo_mt (open query)',
        `Arquivo 'sun.sql' corresponde ao banco sun, então ao executar deve-se selecionar antes o banco sun do servidor SUN antes de executar os comandos, após isso poderá executa-los corretamente`,
        '<strong>Exemplo</strong>: sun (open query)',
        `Arquivo 'relatorios.sql' corresponde ao banco sun_relatorios, então ao executar deve-se selecionar antes o banco sun_relatorios do servidor SUN antes de executar os comandos, após isso poderá executa-los corretamente`,
        '<strong>Exemplo</strong>: sun_relatorios (open query)',
        `Pasta 'executados' corresponde aos comandos SQL que já foram executados e estão mergeados na branch master`,
        '<strong>Erros comuns:</strong>',
        'Vendas não estão aparecendo na listagem de vendas: ',
        `Geralmente é um problema associado a comandos SQL que precisam ser executados em 'relatorios.sql'`,
        'Erro ao salvar uma venda: ',
        `Geralmente é um problema associado a comandos SQL que precisam ser executados em 'sun.sql'`,
      ]
    },
  ]
}