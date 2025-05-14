const whiteScreen = {
  containerId: "container-white-screen",
  description: "",
  listItems: [
    {
      title: "A aba application está com um cache absurdo",
      descriptions: [
        "As vezes a aplicação pode apresentar problemas de cache no ambiente local, ainda n sabemos o motivo",
      ],
      readMore: [
        "Nesse caso siga os passos:",
        "1 - Abra o inspecionar (ferramentas de desenvolvedor (DevTools), F12 ou ctrl + shift + c)",
        "2 - Entre na guia 'Application'",
        "3 - Na lateral esquerda, clique em 'Storage', clique nela",
        "4 - Em seguida clique no botão 'Clear site data'",
      ]
    },
    {
      title: "Provedor não configurado corretamente",
      descriptions: [
        "Se for um provedor novo, ou o seeder bugou, pode haver algum erro no retorno da request <code>whoami</code>",
      ],
      readMore: [
        "Nesse caso siga os passos:",
        "1 - Abra o inspecionar (ferramentas de desenvolvedor (DevTools), F12 ou ctrl + shift + c)",
        "2 - Entre na guia 'Network'",
        "3 - Procure a request 'whoami'",
        "4 - Se ela tiver falhado, pode ser:",
        "4.1 - inconsistência nas tabelas tenants e providers",
        "4.2 - A tabela subdomain pode não estar preenchida corretamente",
        "4.3 - A inexistência do provedor em `/etc/hosts`",
      ]
    },
  ]
}

export default [
  whiteScreen
]
