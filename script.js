
const statement = document.querySelector("#statement");
const optionsButtons = document.querySelector("#options").children;
const explanation = document.querySelector("#explanation");

let fact = {
    statement: "JavaScript was established in 1995",
    answer: true,
    explanation: "JavaScript was first created in 1995, it's since taken off to be one of the most popular scripting languages."
}

statement.textContent = fact.statement;
        
const disable = (button) => button.setAttribute("disabled", "True");
const enable = (button) => button.removeAttribute("disabled");

const isCorrect = (guess) => {
    return (guess === fact.answer.toString());
}


for(let button of optionsButtons)
{
    button.addEventListener("click", (event) => {
        explanation.textContent = fact.explanation;

        for(let disabledButton of optionsButtons)
        {
            disable(disabledButton);
        }

        isCorrect(button.value) ? button.classList.add("correct") : button.classList.add("incorrect");
    })
}