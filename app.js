const comics = [
  {
    title: "Comic 1",
    cover: "comics/comic-1/cover.jpg",
    folder: "comics/comic-1",
  },
  {
    title: "Comic 2",
    cover: "comics/comic-2/cover.jpg",
    folder: "comics/comic-2",
  },
  {
    title: "Comic 3",
    cover: "comics/comic-3/cover.jpg",
    folder: "comics/comic-3",
  },
  {
    title: "Comic 4",
    cover: "comics/comic-4/cover.jpg",
    folder: "comics/comic-4",
  },
  {
    title: "Comic 5",
    cover: "comics/comic-5/cover.jpg",
    folder: "comics/comic-5",
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
