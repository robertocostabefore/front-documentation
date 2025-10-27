const commandsSurvey = {
  containerId: "container-utils-surveys",
  description: "Comando para enviar pesquisas das vendas no e-mail",
  listItems: [
    {
      title: "Para executar o comando de envio de pesquisas siga os passos:",
      descriptions: [
        "1- Acessar o shell no back-end do hub atraveś do comando: <code>hubvendas-api shell</code>",
        "2- Executar o comando a seguir: <code>php artisan hub:send_feedback_survey_mail --startsAt=2025-09-01</code>",
      ],
    },
  ]
}

export default [
  commandsSurvey
]