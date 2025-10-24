const whiteScreen = {
  containerId: "container-white-screen",
  description: "",
  listItems: [
    {
      title: "A aba aplication está com um cache absurdo",
      descriptions: [
        "As vezes a aplicação fica com o cache bugado no local, ainda n sabemos o motivo",
      ],
      readMore: [
        "Nesse caso siga os passos:",
        "1 - Abra o inspecionar",
        "2 - Entre na guia 'Aplication'",
        "3 - No canto superior esquerdo haverá uma aba chamada 'storage', clique nela",
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
        "1 - Abra o inspecionar",
        "2 - Entre na guia 'Network'",
        "3 - Procure a request 'whoami'",
        "4 - Se ela tiver falhado, pode ser:",
        "4.1 - Inconsistencia nas tabelas tenants e providers",
        "4.2 - A tabela subdomain pode não estar preenchida corretamente",
        "4.3 - A inexistencia do provedor em `/etc/hosts`",
      ]
    },
    {
      title: "Criptografia ativa apenas no front",
      descriptions: [
        "Caso haja o seguinte erro no console do navegador: <code>InvalidCharacterError: Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.</code>",
        "Então siga os passos:",
      ],
      readMore: [
        "1 - Vá até o seu arquivo .env",
        "2 - Encontre a variável chamada <strong>VUE_APP_ENCRYPT_COMUNICATION</strong>",
        "3 - Remova o valor e deixe a variável vazia: <strong>VUE_APP_ENCRYPT_COMUNICATION=</strong>",
        "4 - Pronto, agora basta subir o container do front novamente e o problema terá sido resolvido",
      ]
    },
  ]
}

export default [
  whiteScreen
]
