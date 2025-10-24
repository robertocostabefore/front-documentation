const surveys = {
  containerId: "container-surveys",
  description: "Comando para enviar pesquisa da venda no e-mail",
  listItems: [
    {
      title: "Para acessar e responder uma pesquisa, siga os passos abaixo:",
      descriptions: [
        "1- Possuir ao menos uma venda finalizada no dia atual",
        "2- Acessar o shell no back-end do hub atraveś do comando: <code>hubvendas-api shell</code>",
        "3- Execute o comando a seguir: <code>php artisan hub:send_feedback_survey_mail --startsAt=2025-09-01</code>",
        "4- Acessar o mailcatcher no local através da url: http://localhost:18003/",
        "5- Encontrar o email referente a pesquisa e acessar o link contido nele.",
        "5.1- Caso o link da pesquisa não funcione imediatamente, basta ajustá-lo conforme a URL atual do front-end."
      ],
    },
  ]
}

export default [
  surveys
]