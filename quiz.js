function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4"; // Replace with the actual correct answer
  
    // 2. Retrieve the User's Answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked'); 
    const userAnswer = selectedRadio.value;
  
    // 3. Compare the User's Answer with the Correct Answer
    const feedbackElement = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = ["That's incorrect. Try again!"];
    }
  }
  
  // 4. Add an Event Listener to the Submit Button
  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer);