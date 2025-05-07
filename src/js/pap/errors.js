export default {
  description: "Solução e Verificação de erros no PaP",
  errors: [
    {
      title: "VERIFICAR ERROS EM ENDPOINTS SUN",
      descriptions: [
        `Verificar o endpoint e o erro que ele retorna, se for pouco descritivo, poderá verificar melhor no log de erros do shell`,
        `<strong>Exemplo de endpoint do sun:</strong> 'https://{URL}/_api/router.php?action=listarRede'`,
        'Acesso ao log de erros do shell: sun docker:/var/www/html$ tail -f -n 500 /tmp/php_errors.log',
        '<strong>Exemplo de erro capturado: </strong>',
        `sun docker:/var/www/html$ tail -f -n 500 /tmp/php_errors.log 
        [02-May-2025 12:38:17 America/Sao_Paulo] Client error: GET http://192.168.100.130:15000/v1/pap/ms/vendas/backoffice/detalhar-venda/1623751 resulted in a 404 Not Found response:
        {"codigo":0,"mensagem":"A venda MS - 1623751 do canal PAP n\u00e3o foi encontrada.","dados":null}`
      ]
    },
    {
      title: "VERIFICAR ERROS EM ENDPOINTS SUN-CORE",
      descriptions: [
        `Verificar o endpoint e o erro que ele retorna, se for pouco descritivo, poderá verificar melhor no log de erros dp shell`,
        `<strong>Exemplo de endpoint do sun-core:</strong> 'https://{URL}/core/v1/pap/usuario/verificar-contatos''`,
        'Acesso ao log de erros do shell: sun-core-api docker:/var/www/html$ tail -f -n 500 storage/logs/laravel.log',
      ]
    },
  ]
}