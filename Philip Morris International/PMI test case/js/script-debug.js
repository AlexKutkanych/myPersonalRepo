let tasksBlock = document.querySelector(".tasks-block")
let allInputs = document.querySelectorAll("input");
var corA = [];

(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

let checkAnswers = (e) => {
    e.preventDefault();
    let userAnswers = [];

    allInputs.forEach(function(val){
        userAnswers.push(val.value);
    });

    for (let i = 0; i < userAnswers.length; i++){
       if(userAnswers[i] === corA[i]){
           allInputs[i].style.borderBottom = "2px solid green";
        } else {
           allInputs[i].style.borderBottom = "2px solid red";
        }
    }
}

corA = ["952000", "65000", "2.12", "2.72", "12", "14", "32", "3", "2", "9", "14", "44", "42", "29", "39"];

tasksBlock.addEventListener("change", checkAnswers);
