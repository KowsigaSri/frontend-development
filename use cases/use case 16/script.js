const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {
  const question = item.querySelector(".question");


  question.addEventListener("click", () => {
    // Toggle current item
    item.classList.toggle("active");


    const answer = item.querySelector(".answer");
    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    }


    // Optional: close others (accordion behavior)
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".answer").style.maxHeight = "0";
      }
    });
  });
});
