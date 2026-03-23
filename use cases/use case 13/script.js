const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");


imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];


  if (!file){
    alert("please upload the file")
    return;

  } 


  // Validate image type
  if (!file.type.startsWith("image/")) {
    alert("Please select an image file");
    imageInput.value = "";
    previewImage.style.display = "none";
    return;
  }


const reader = new FileReader();


  reader.onload = (e) => {
    previewImage.src = e.target.result;
    previewImage.style.display = "block";
  };


  reader.readAsDataURL(file);
});
