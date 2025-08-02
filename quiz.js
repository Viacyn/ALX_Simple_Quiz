 function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, show message and stop
    if (!selectedOption) {
      document.getElementById("feedback").textContent = "Please select an answer.";
      return;
    }

    // Get the user's answer
    const userAnswer = selectedOption.value;

    // Compare and give feedback
    if (userAnswer === correctAnswer) {
      document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
      document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
  }

  // Add event listener to the submit button
  document.getElementById("submit-answer").addEventListener("click", checkAnswer);
