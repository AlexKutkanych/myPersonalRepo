(function() {
    const myQuestions = [
        {   
            id: 1,
            question: "Choose the correct answer concerning company’s performance:",
            answers: {
                a: "The business has available capital to expand rapidly without taking on new, additional debt or investors.",
                b: "The company is not able to generate enough from operations to pay for its current obligations with current assets.",
                c: "A company can pay its current liabilities using only current assets."
            },
            correctAnswer: "c"
        },
         {  
            id: 2,
            question: "Choose the correct answer concerning company’s performance:",
            answers: {
                a: "A company is becoming less efficient.",
                b: "A company manages credit well and use receivables more efficiently.",
                c: "A company is able to buy more raw materials on credit."
            },
            correctAnswer: "b"
        },
         {  
            id: 3,
            question: "Choose the correct answer concerning company’s performance:",
            answers: {
                a: "A company is less likely to be able to handle its debt burden, and thus is less likely to be able to take on the additional debt required to grow the business.",
                b: "The creditworthiness of a corporation increased.",
                c: "Creditors don&#39;t have as much skin in the game as the investors do."
            },
            correctAnswer: "b"
        },
         {  
            id: 4,
            question: "Choose the correct answer concerning company’s performance:",
            answers: {
                a: "Product price has significantly influenced company’s revenue.",
                b: "More than 50% of product price is company’s revenue.",
                c: "Product price has not been changed, as there was no appropriate information."
            },
            correctAnswer: "a"
        },
         {  
            id: 5,
            question: "Choose the correct answer concerning company’s performance:",
            answers: {
                a: "A company is making large investments.",
                b: "A company has cash to be used for expansion, reducing debt, dividends.",
                c: "A company has influenced its free cash flow by shortening the time they take to pay the bills (thus preserving their cash).",
            },
            correctAnswer: "b"
        },
    ];

    let questionCounter = document.querySelector("#question-counter");
    let resultModal = document.querySelector("#modal");  
    let score = document.querySelector("#score");  
    let highScoreMsg = document.querySelector(".high-score__msg");  
    let lowScoreMsg = document.querySelector(".low-score__msg");  

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];
        // and for each available answer...
        for (letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
                `<label>
             <input type="radio" class="option${questionNumber}" name="question${questionNumber}" data-question="${currentQuestion.answers[letter]}" value="${letter}">
              ${letter}.
              ${currentQuestion.answers[letter]}
           </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
        );
    });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }
    var allUserAnswers = [];
    const yourAnswers = document.querySelector("#user-answers__list");

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswerLetter = (answerContainer.querySelector(selector) || {}).value;
        const userAnswers = (answerContainer.querySelector(selector) || {}).dataset.question;

        allUserAnswers.push(userAnswers);

        // if answer is correct
        if (userAnswerLetter === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;
        } else {
            numCorrect
        }
    });

    let userAnswerItem = [];

    allUserAnswers.forEach(item => {
        userAnswerItem.push(
        `<li class="user-answer__item">${item}</li>`);
    })

    yourAnswers.innerHTML = userAnswerItem.join("");

        if(numCorrect > 2){
            highScoreMsg.classList.add("active");
        }  else {
            lowScoreMsg.classList.add("active");
        }
        
        score.innerHTML = numCorrect; 
        resultModal.style.display = "block";
    }

    function showSlide(n) {

        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        questionCounter.innerHTML = `Question ${n+1} out of ${myQuestions.length}`;
 
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        var allVariants = document.querySelectorAll(".active-slide > .answers > label > input");
        for (var i = 0; i < allVariants.length; i++){
            if (allVariants[i].checked !== true){
                errorMsg.style.display = "block";
            } else {
                showSlide(currentSlide + 1);
                errorMsg.style.display = "none";
            }
        }
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right
    buildQuiz();

    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    const errorMsg = document.querySelector(".choose-option");
    let currentSlide = 0;

    showSlide(0);

    submitButton.addEventListener("click", showResults);
    nextButton.addEventListener("click", showNextSlide);
})();
