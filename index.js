const questions = [
    {
        "que": "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        "a": "A plant",
        "b": "A fire",
        "c": "A cloud",
        "d": "A shadow",
        "correct": "b"
    },
    {
        "que": "I can be cracked, made, told, and played. What am I?",
        "a": "A joke",
        "b": "A code",
        "c": "A promise",
        "d": "A secret",
        "correct": "a"
    },
    {
        "que": "I am not alive, but I grow; I don't have a body, but I am always growing; I am everywhere, yet I have no physical form. What am I?",
        "a": "Knowledge",
        "b": "Love",
        "c": "A dream",
        "d": "An idea",
        "correct": "d"
    },
    {
        "que": "The more you take, the more you leave behind. What am I?",
        "a": "Time",
        "b": "Footsteps",
        "c": "Knowledge",
        "d": "Words",
        "correct": "b"
    },
    {
        "que": "I am not alive, yet I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        "a": "A plant",
        "b": "A fire",
        "c": "A cloud",
        "d": "A shadow",
        "correct": "b"
    }
];


let index = 0;
const queBox = document.getElementById("queBox");
const optionA = document.getElementById("optiona")
const optionB = document.getElementById("optionb")
const optionC = document.getElementById("optionc")
const optionD = document.getElementById("optiond")
const submit = document.querySelector(".btn")
const optionInputs = document.querySelectorAll(".options")
const endCode = document.getElementById("Result")
const popup = document.querySelector(".overlay");
const okayBtn = document.querySelector(".okay")

let total = questions.length;
let right = 0;
let wrong = 0;





const loadQuestion = () => {
    if(index == total){
        return endQuiz();
    }
    reset();
    const data = questions[index]; /* Here we have called / selected all the data in the question mentioned in the array including its options and correct answer*/
    queBox.innerHTML = `${index + 1}) ${data.que}`;  /* This is just to print a no.*/
    optionA.innerHTML = data.a;
    optionB.innerHTML = data.b;
    optionC.innerHTML = data.c;
    optionD.innerHTML = data.d;


}

const submitQuiz = () => {
    const ans = getAnswer();

    if (!ans) {
        popup.style.display = "flex";
        return;
    }
    

    // Update score based on the answer
    if (ans === questions[index].correct) {
        right++;
    } else {
        wrong++;
    }

    // Disable submit button, wait 2 seconds, then load the next question or end the quiz
    submit.disabled = true;
    setTimeout(() => {
        index++;
        index < total ? loadQuestion() : endQuiz();
        submit.disabled = false;
    }, 200);
};


okayBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
})



const getAnswer = () => {
    let selectedAnswer;
    optionInputs.forEach(e => {
        if (e.checked) {
            selectedAnswer = e.value;
        }
    });
    return selectedAnswer;
};

const reset = () => {
    optionInputs.forEach(e => {
        e.checked = false; 
    });
};



const endQuiz = ()=>{

    endCode.innerHTML = `<h2>Thank you Playing the Quiz.<br>
    ${right} / ${total} are correct.
</h2><br>
`

    document.querySelector(".endContent").style.display = "block";
    document.querySelector(".questionsContent").style.display = "none";

    
}

const animation = (e) => {
    e.preventDefault();
    button.classList.add("animate");

    setTimeout(() => {
        button.classList.remove("animate");
    }, 600);
};

// to click on submit button
submit.addEventListener("click", submitQuiz);



// Initial Call/ 1st Question
loadQuestion();



