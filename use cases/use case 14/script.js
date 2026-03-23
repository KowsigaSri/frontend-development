const newsContainer = document.getElementById("newsContainer");
const loader = document.getElementById("loader");


// API URL
const API_URL = "https://jsonplaceholder.typicode.com/posts";


// Fetch articles from API
async function loadNews() {
  try {
    const response = await fetch(API_URL);
    const articles = await response.json();


    loader.style.display = "none";


    articles.slice(0, 12).forEach(article => {
      const newsCard = createNewsCard(article);
      newsContainer.appendChild(newsCard);
    });


  } catch (error) {
    loader.textContent = "Failed to load articles ";
    console.error(error);
  }
}


// Create dynamic HTML template
function createNewsCard(article) {
  const div = document.createElement("div");
  div.classList.add("news-card");


  div.innerHTML = `
    <h3>${article.title}</h3>
    <p>${article.body}</p>
    <span>Author ID: ${article.userId}</span>
  `;


  return div;
}


// Load news on page load
loadNews();
