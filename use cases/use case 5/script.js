const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll("#itemList li");


searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();


    items.forEach(item => {
        const text = item.textContent.toLowerCase();


    if (text.includes(searchValue)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
});
