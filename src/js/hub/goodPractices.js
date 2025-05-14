export default {
  description: "",
  listItems: [
    {
      title: "PADRÃO DA PR",
      descriptions: [
        "[`${card}`] `${tipo}`: msg",
        "[`${card_epico}`][`${card_n}`] `${tipo}`: msg",
        "'tipo' refere-se ao tipo de mudança: FIX (correção), FEAT (nova funcionalidade), REFAT(refatoração), STYLE (estilo/codestyle)",
        "ex: [MAS-3696] REFAT: refactoring order analysis"
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
  ]
}

// regras de css

// regras de lint

// regras de nomenclatura


