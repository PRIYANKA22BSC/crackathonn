function showInput(feedbackType) {
    document.getElementById("feedback-input").style.display = "block";
    document.getElementById("feedback-type").innerText = feedbackType;
  }
  
  function submitFeedback() {
    const feedbackText = document.getElementById("feedback-text").value;
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("feedback-input").style.display = "none";
    document.getElementById("feedback-text").value = "";
  }