const activeEncrypt = {
  containerId: "container-active-encrypt",
  description: "ATIVANDO CRIPTOGRAFIA NO SEU AMBIENTE LOCAL",
  listItems: [
    {
      title: "VERIFICANDO AS VARIÁVEIS DO FRONT-END",
      descriptions: [
        "No Front-end do projeto, vá até o seu arquivo .env e procure pelas seguintes variáveis de ambiente: <br/> <strong>VUE_APP_ENCRYPT_COMUNICATION</strong> <br/><strong>VUE_APP_RSA_KEY_LENGHT</strong> <br/> <strong>VUE_APP_RESQUEST_RSA_PUBLIC_KEY</strong>",
        "Caso não as possua, basta copiar e colar no seu arquivo .env ;)"
      ],
    },
    {
      title: "POPULANDO AS VARIÁVEIS DO FRONT-END",
      descriptions: [
        "Em seguida, siga os passos:",
        "Atribua VUE_APP_ENCRYPT_COMUNICATION da seguinte forma: <br/>- <strong>VUE_APP_ENCRYPT_COMUNICATION=true</strong>",
        "Atribua VUE_APP_RSA_KEY_LENGHT da seguinte forma:  <br/>- <strong>VUE_APP_RSA_KEY_LENGHT=2048</strong>",
        "Na variável VUE_APP_RESQUEST_RSA_PUBLIC_KEY, será necessário solicitar a chave pública a um colega e atribuí-la da seguinte forma: <br/>- <strong>VUE_APP_RESQUEST_RSA_PUBLIC_KEY='Chave pública'</strong>",
      ],
      readMore: [
        "Obs.: A variável <strong>VUE_APP_ENCRYPT_COMUNICATION</strong> deve permanecer vazia para desativar a criptografia. Como o sistema a interpreta como uma string e não como um valor boolean, qualquer valor atribuído será considerado como true."
      ]
    },
    {
      title: "VERIFICANDO AS VARIÁVEIS DO BACK-END",
      descriptions: [
        "No back-end do projeto, vá até o seu arquivo .env e procure pelas seguintes variáveis de ambiente: <br/> <strong>APP_ENCRYPT_COMMUNICATION</strong> <br/><strong>APP_RSA_KEY_LENGTH</strong> <br/> <strong>APP_RSA_PRIVATE_KEY</strong>",
        "Caso não as possua, basta copiar e colar no seu arquivo .env ;)"
      ],
    },
    {
      title: "POPULANDO AS VARIÁVEIS DO BACK-END",
      descriptions: [
        "Em seguida, siga os passos:",
        "Atribua APP_ENCRYPT_COMMUNICATION da seguinte forma: <br/>- <strong>APP_ENCRYPT_COMMUNICATION=true</strong>",
        "Atribua APP_RSA_KEY_LENGTH da seguinte forma:  <br/>- <strong>APP_RSA_KEY_LENGTH=2048</strong>",
        "Na variável APP_RSA_PRIVATE_KEY, será necessário solicitar a chave privada a um colega e atribuí-la da seguinte forma: <br/>- <strong>APP_RSA_PRIVATE_KEY='Chave privada'</strong>",
      ],
      readMore: [
        "Obs.: A variável <strong>APP_RSA_PRIVATE_KEY</strong> deve permanecer como false para desativar a criptografia."
      ]
    }
  ]
}

export default [
  activeEncrypt
]