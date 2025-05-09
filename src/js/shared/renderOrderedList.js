const arrowDownIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-down-circle-fill' viewBox='0 0 16 16'><path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z'/></svg>"
const arrowUpIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-up-circle-fill' viewBox='0 0 16 16'><path d='M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z'/></svg>"

function renderOrderedList({ description, listItems, containerId }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (description) {
    const title = createTitle(description)
    container.appendChild(title);
  }

  const list = createList(listItems)
  container.appendChild(list);
}

function createTitle(text) {
  const title = document.createElement("div");
  title.className = "title mb-3 mt-3 fw-bold";
  title.textContent = text;
  return title;
}

function createList(listItems) {
  const list = document.createElement("ol");
  list.className = "list-group list-group-numbered mb-3";

  listItems.forEach((goal, index) => {
    list.appendChild(createGoalItem(goal, index));
  });

  return list;
}

function createGoalItem(goal, index) {
  const item = document.createElement("li");
  item.className = "list-group-item d-flex justify-content-between align-items-start flex-wrap";

  const content = document.createElement("div");
  content.className = "table-content";

  const title = document.createElement("div");
  title.className = "fw-bold mb-1";
  title.textContent = goal.title;

  const descriptions = createDescriptionsList(goal.descriptions);
  content.appendChild(title);
  content.appendChild(descriptions);

  item.appendChild(content);

  if (goal.readMore && goal.readMore.length > 0) {
    const collapseId = `readMore-${index}`;

    const toggleButton = document.createElement("button");
    toggleButton.className = "btn btn-outline table-button-colapse-extra-content";
    toggleButton.setAttribute("data-bs-toggle", "collapse");
    toggleButton.setAttribute("data-bs-target", `#${collapseId}`);
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-controls", collapseId);
    toggleButton.innerHTML = arrowDownIcon;

    const collapseDiv = document.createElement("div");
    collapseDiv.className = "collapse table-content table-colapse-extra-content";
    collapseDiv.id = collapseId;

    const readMoreList = createDescriptionsList(goal.readMore);
    collapseDiv.appendChild(readMoreList);

    collapseDiv.addEventListener("shown.bs.collapse", () => {
      toggleButton.innerHTML = arrowUpIcon;
    });

    collapseDiv.addEventListener("hidden.bs.collapse", () => {
      toggleButton.innerHTML = arrowDownIcon;
    });

    item.appendChild(toggleButton);
    item.appendChild(collapseDiv);
  }

  return item;
}
function createDescriptionsList(descriptions) {
  const list = document.createElement("ul");
  list.className = "mb-0";

  descriptions.forEach((text) => {
    const item = document.createElement("li");
    item.innerHTML = text;
    list.appendChild(item);
  });

  return list;
}

export { renderOrderedList };
