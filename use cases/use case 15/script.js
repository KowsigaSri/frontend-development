const toggleBtn = document.getElementById("themeToggle");
const body = document.body;


// Check localStorage for saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.toggle("dark-mode", savedTheme === "dark");
}


// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");


  // Save preference
  const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});
