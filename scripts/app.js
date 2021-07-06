// Get all the question elements
const questions = document.querySelectorAll(".question");

// Loop through all the questions and add a click event to each
// + Get the answer element next to the question that was clicked
// + Get the arrow within the clicked question

// + If answer has a class of 'hide'
// + Remove the 'hide' class from answer
// + Add the 'active' class to question
// + Add the 'arrow-spin' class to arrow
// + Otherwise do the reverse
for (let question of questions) {
  question.addEventListener("click", () => {
    let answer = question.nextElementSibling;
    let arrow = question.firstElementChild;

    if (answer.classList.contains("hide")) {
      answer.classList.remove("hide");
      question.classList.add("active");
      arrow.classList.add("arrow-spin");
    } else {
      answer.classList.add("hide");
      question.target.classList.remove("active");
      arrow.classList.remove("arrow-spin");
    }
  });
}
