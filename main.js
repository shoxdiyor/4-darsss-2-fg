function createLearningCard() {
  const cardData = {
    image: "path-to-card-image.jpg",
    tag: "Learning",
    date: "Published 21 Dec 2023",
    title: "HTML & CSS foundations",
    description:
      "These languages are the backbone of every website, defining structure, content, and presentation.",
    author: {
      name: "Greg Hooper",
      image: "https://i.pravatar.cc/100",
    },
  };

  const app = document.getElementById("app");

  const card = document.createElement("div");
  card.className = "card";

  const imageSection = document.createElement("div");
  imageSection.className = "card-image";
  card.appendChild(imageSection);

  const content = document.createElement("div");
  content.className = "card-content";

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = cardData.tag;
  content.appendChild(tag);

  const date = document.createElement("div");
  date.className = "date";
  date.textContent = cardData.date;
  content.appendChild(date);

  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = cardData.title;
  content.appendChild(title);

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = cardData.description;
  content.appendChild(description);

  const author = document.createElement("div");
  author.className = "author";

  const authorImage = document.createElement("img");
  authorImage.className = "author-image";
  authorImage.src = cardData.author.image;
  authorImage.alt = cardData.author.name;
  author.appendChild(authorImage);

  const authorName = document.createElement("span");
  authorName.className = "author-name";
  authorName.textContent = cardData.author.name;
  author.appendChild(authorName);

  content.appendChild(author);

  card.appendChild(content);

  app.appendChild(card);
}

document.addEventListener("DOMContentLoaded", createLearningCard);
