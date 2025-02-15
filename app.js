const cardContent = {
  badge: "Learning",
  date: "Published 21 Dec 2023",
  title: "HTML & CSS foundations",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  authorName: "Greg Hooper",
};

function setCardContent() {
  document.getElementById("badge").textContent = cardContent.badge;
  document.getElementById("date").textContent = cardContent.date;
  document.getElementById("title").textContent = cardContent.title;
  document.getElementById("description").textContent = cardContent.description;
  document.getElementById("author-name").textContent = cardContent.authorName;
}

document.addEventListener("DOMContentLoaded", setCardContent);
