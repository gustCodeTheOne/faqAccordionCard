let accordion = document.getElementsByClassName("questionContainer");

for(let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function(){
    this.classList.toggle("active");

    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.marginBottom = 0 + "px";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.marginBottom = 13 + "px";
    }
  });
}