function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();


  if (message === "") {
    alert("enter chat!");


    return;
  }
    


  addMessage(message, "sent");
  input.value = "";


  // Simulated reply
  setTimeout(() => {
    addMessage("Auto reply: " + message, "received");
  }, 800);
}


function addMessage(text, type) {
  const chatBox = document.getElementById("chatBox");
  const msgDiv = document.createElement("div");


  msgDiv.className = `message ${type}`;
  msgDiv.textContent = text;


  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}


