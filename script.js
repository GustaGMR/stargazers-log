fetch("events.json")
  .then((response) => response.json())
fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load events: ${response.status}`);
    }
    return response.json();
  })
   .then((events) => {
     const list = document.querySelector("#starred");
     events.forEach((event) => {
       const item = document.createElement("li");
       item.textContent = `${event.name} — starred ${event.starred}`;
       list.appendChild(item);
  });
  })
  .catch(() => {
    document.querySelector("#starred").textContent =
       "Não foi possível carregar os repositórios favoritos.";
});