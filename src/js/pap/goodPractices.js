export default {
  description: "Boas práticas do time do PaP",
  goodPractices: [
    {
      title: "PADRÃO DA PR",
      descriptions: [
        "[`${card}`] `${tipo}`: msg",
        "[`${card_epico}`][`${card_n}`] `${tipo}`: msg",
        "tipo: [FIX, FEAT, REFAT, STYLE]",
        "ex: [MAS-3696] REFAT: refacting order analysis"
      ]
    },
    {
      title: "CRIAR CONSTs",
      descriptions: [
        "Sempre criar constantes para melhorar a leitura",
        "entender <code>if (foo == PI)</code>",
        "é bem mais fácil que entender <code>if (foo == 3.14159265359)</code>",
        "Então sempre deve-se criar consts para facilitar tanto a leitura e entendimento quanto a reutilização"
      ]
    },
    {
      title: "NUNCA USAR CAMINHO RELATIVO",
      descriptions: [
        "Temos uma lista bem grandinha de alias. E sempre devemos utilizá-los para termos o caminho absoluto.",
        "BAD EX: ../../../../foo/bar/View.vue",
        "GREAT EX: @foo/bar/View.vue",
        "Acesse o arquivo aliases.config.js para ver a lista completa dos nossos aliases."
      ]
    },
  ]
}

// regras de css

// regras de lint

// regras de nomenclatura


