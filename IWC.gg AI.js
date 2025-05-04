document.getElementById("inputText").addEventListener("input", function () {
  var typingIndicator = document.getElementById("typingIndicator");
  typingIndicator.style.display = "block";
});

function sendMessage() {
  var inputText = document.getElementById("inputText").value;

  if (inputText.trim() !== "") {
    var textBox = document.getElementById("firstMessage");
    textBox.style.display = "block";
    textBox.textContent = inputText;
    document.getElementById("inputText").value = ""; // Clear the textarea
    document.getElementById("typingIndicator").style.display = "none"; // Hide typing indicator
    document.querySelector('.profilePic2').style.display = "block"; // Show profilePic2

    setTimeout(function() {
      displayMessage("messg1", "Which Game would you like to play?");
    }, 1000);

    setTimeout(function() {
      displayMessage("card1");
    }, 2000);

    setTimeout(function() {
      displayMessage("card2");
    }, 2500);

    setTimeout(function() {
      displayMessage("card3");
    }, 3000);
  }
}

// Add event listener for the send button
document.getElementById("sendButton").addEventListener("click", function () {
  sendMessage();
});

// Add event listener for the Enter key on the textarea
document.getElementById("inputText").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default action (new line)
    sendMessage();
  }
});

function displayMessage(id, content) {
  var messageDiv = document.getElementById(id);
  if (content) {
    messageDiv.textContent = content;
  }
  messageDiv.style.display = "block";
  messageDiv.style.animation = "pop-in 0.5s forwards";
}