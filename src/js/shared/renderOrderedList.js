function renderOrderedList({ description, goals, containerId }) {
  const content = document.getElementById(containerId);

  // Adiciona uma descrição principal
  const titleDiv = document.createElement("div");
  titleDiv.className = "title mb-3 mt-3 fw-bold";
  titleDiv.textContent = description;
  content.appendChild(titleDiv);

  // Cria a lista ordenada com as classes do Bootstrap
  const goalsList = document.createElement("ol");
  goalsList.className = "list-group list-group-numbered mb-3";

  goals.forEach((goal) => {
    // Cria o item da lista com as classes Bootstrap
    const goalItem = document.createElement("li");
    goalItem.className = "list-group-item d-flex justify-content-between align-items-start";

    // Cria a div para o conteúdo do item
    const goalContent = document.createElement("div");
    goalContent.className = "ms-2 me-auto";

    // Cria o título do objetivo
    const goalTitle = document.createElement("div");
    goalTitle.className = "fw-bold";
    goalTitle.textContent = goal.title;

    // Cria uma lista para as descrições
    const descriptionsList = document.createElement("ul");
    descriptionsList.className = "mb-0";
    goal.descriptions.forEach((description) => {
      const descriptionItem = document.createElement("li");
      descriptionItem.textContent = description;
      descriptionsList.appendChild(descriptionItem);
    });

    // Monta a estrutura
    goalContent.appendChild(goalTitle);
    goalContent.appendChild(descriptionsList);
    goalItem.appendChild(goalContent);
    goalsList.appendChild(goalItem);
  });

  content.appendChild(goalsList);
}

export {
  renderOrderedList
}