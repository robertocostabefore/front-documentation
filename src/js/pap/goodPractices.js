export default {
  description: "",
  listItems: [
    {
      title: "PADRÃO DA PR",
      descriptions: [
        "[`${card}`] `${tipo}`: msg",
        "ex: [MAS-3696][MAS-1212] REFAT: refacting order analysis",
      ],
      readMore: [
        "[`${card_epico}`][`${card_n}`] `${tipo}`: msg",
        "tipo: [FIX, FEAT, REFAT, STYLE]",
      ]
    },
    {
      title: "CRIAR CONSTs",
      descriptions: [
        "Sempre criar constantes para melhorar a leitura",
      ],
      readMore: [
        "entender <code>if (foo == PI)</code>",
        "é bem mais fácil que entender <code>if (foo == 3.14159265359)</code>",
        "Então sempre deve-se criar consts para facilitar tanto a leitura e entendimento quanto a reutilização"
      ]
    },
    {
      title: "NUNCA USAR CAMINHO RELATIVO",
      descriptions: [
        "Nunca usar '../[..]' ao importar arquivos.",
        "Temos uma lista bem completa de alias em 'aliases.config.js'. E sempre devemos utilizá-los para termos o caminho absoluto.",
      ],
      readMore: [
        "BAD EX: ../../../../foo/bar/View.vue",
        "GREAT EX: @foo/bar/View.vue",
      ]
    },
  ]
}

// regras de css

// regras de lint

// regras de nomenclatura


