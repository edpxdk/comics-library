const comics = [
  {
    title: "Sandiwara Semu",
    cover: "comics/comic-1/cover.jpg",
    folder: "comics/comic-1",
  },
  {
    title: "Comming soon...",
    cover: "comics/comic-2/cover.jpg",
    folder: "comics/comic-2",
  },
];

const list = document.getElementById("comic-list");

comics.forEach((c) => {
  const card = document.createElement("div");

  card.className = "comic-card";

  card.innerHTML = `
    <img src="${c.cover}" alt="${c.title}">
    <h3>${c.title}</h3>
  `;

  card.onclick = () => {
    window.location.href = `${c.folder}/index.html`;
  };

  list.appendChild(card);
});
