var questions = document.getElementsByClassName("question");
var i;

for (i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function() {
        this.classList.toggle("question-active");
        this.children[0].classList.toggle("arrow-icon");
        var answer = this.nextElementSibling;
        if(answer.style.display === "block") {
            answer.style.display = "none";
        }
        else {
            answer.style.display = "block";
        }
    });
}