const identifyErrorsSun = {
  containerId: "container-identify-errors-sun",
  description: "Caso haja alguma inconsistência no sistema, essa é a forma de verificar o log de erros dos endpoints do SUN",
  listItems: [
    {
      title: "Verificar erros em endpoints sun",
      descriptions: [
        "Verificar o endpoint e o erro que ele retorna, se for pouco descritivo, poderá verificar melhor no log de erros do shell",
        "<strong>Exemplo de endpoint do sun:</strong> 'https://{URL}/_api/router.php?action=listarRede'",
      ]
    },
    {
      title: "Acessar o Log do laravel",
      descriptions: [
        "Nele você encontrará informações sobre o backend existente no sun, basta executar:",
        "<code>sun docker:/var/www/html$ tail -f -n 500 /tmp/php_errors.log</code>",
        "vale lembrar que o container precisa estar sendo executado",
      ],
      readMore: [
        "<strong>Exemplo de erro capturado: </strong>",
        "sun docker:/var/www/html$ tail -f -n 500 /tmp/php_errors.log <br> [02-May-2025 12:38:17 America/Sao_Paulo] Client error: GET http://192.168.100.130:15000/v1/pap/ms/vendas/backoffice/detalhar-venda/1623751 resulted in a 404 Not Found response: <br> {'codigo':0,'mensagem':'A venda MS - 1623751 do canal PAP n\u00e3o foi encontrada.','dados':null}"
      ]
    },
  ]
}

const identifyErrorsSunCore = {
  containerId: "container-identify-errors-sun-core",
  description: "Caso haja alguma inconsistência no sistema, essa é a forma de verificar o log de erros dos endpoints do SUN-CORE",
  listItems: [
    {
      title: "Verificar erros em endpoints sun-core",
      descriptions: [
        "Verificar o endpoint e o erro que ele retorna, se for pouco descritivo, poderá verificar melhor no log de erros do shell",
        "<strong>Exemplo de endpoint do sun-core:</strong><br><code>https://{URL}/core/v1/pap/usuario/verificar-contatos</code>",
      ]
    },
    {
      title: "Verificar erros no log sun-core",
      descriptions: [
        "Acesso ao log de erros do shell: <br> <code>sun-core-api docker:/var/www/html$ tail -f -n 500 storage/logs/laravel.log</code>",
      ]
    },
  ]
}

export default [
  identifyErrorsSun,
  identifyErrorsSunCore,
]
