let questionCount = 4;

function addQuestion() {
  questionCount++;

  const container = document.getElementById("formContainer");
  const newQuestion = document.createElement("div");
  newQuestion.classList.add("question");
  newQuestion.innerHTML = `
						<label for="question${questionCount}">Question ${questionCount}:</label>
						<input type="text" id="question${questionCount}" name="question${questionCount}">
					  `;

  container.appendChild(newQuestion);
}

document
  .getElementById("addQuestionButton")
  .addEventListener("click", addQuestion);
