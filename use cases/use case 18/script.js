const steps = document.querySelectorAll(".form-step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progress = document.getElementById("progress");


let currentStep = 0;


updateForm();


nextBtn.addEventListener("click", () => {
  if (!validateStep()) return;


  currentStep++;
  if (currentStep >= steps.length) {
    alert("Form Submitted Successfully!");
    document.getElementById("multiStepForm").reset();
    currentStep = 0;
  }
  updateForm();
});


prevBtn.addEventListener("click", () => {
  currentStep--;
  updateForm();
});


function updateForm() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });


  prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";
  nextBtn.textContent = currentStep === steps.length - 1 ? "Submit" : "Next";


  progress.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
}


function validateStep() {
  const activeStep = steps[currentStep];
  const input = activeStep.querySelector("input");
  const error = activeStep.querySelector(".error");


  if (input.value.trim() === "") {
    error.textContent = "This field is required";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}


