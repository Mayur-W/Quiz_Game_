var questions = ["What is the Capital of India ?",
    "Who is the Prime Minister of India ?",
    "Which is the National Animal of India ?",
    "Which is the National Bird of India ?",
    "How many States and Union Teretory are in India ?"]

var answers = ["New Delhi",
    "Narendra Modi",
    "Tiger",
    "Peacock",
    "28 States and 8 Union Territories"]

var options = [["Kolkata", "New Delhi", "Mumbai", "Banglore"],
["Amit Shah", "Ram Nath Kovind", "Narendra Modi", "Nitin Gadkari"],
["Tiger", "Lion", "Elephant", "Panther"],
["Parrot", "Peacock", "Sparrow", "Eagle"],
["27 States and 9 Union Territories", "29 States and 7 Union Territories",
    "27 States and 8 Union Territories", "28 States and 8 Union Territories"]]



var QuestionNumber = 0; // for current question no. we r on
var TotalQuestions = questions.length; // to measure the size of array and store it.
var progress = 0
var IncFactor = 100 / TotalQuestions   // amount of marks in percentagethat are being awarded for each question 

const QuestionDiv = document.getElementsByClassName("question")[0] // QuestionDiv stores the html element which has class name as question
QuestionDiv.innerHTML = `<p>${QuestionNumber + 1}. ${questions[QuestionNumber]}</p>`
console.log(questions[0])

const OptionDiv = document.getElementsByClassName("option")[0]
SetOptions()
console.log(options[0])



function nextbclick() {
    if (QuestionNumber < TotalQuestions - 1) { //here we wrote it bcz it has the value of 5 but we want to go upto only 4
        QuestionNumber++
        QuestionDiv.innerHTML = `${QuestionNumber + 1}. ${questions[QuestionNumber]}`
        SetOptions()
    }

}

function prevbclick() {
    if (QuestionNumber >= 1) {
        QuestionNumber--
        QuestionDiv.innerHTML = `${QuestionNumber + 1}. ${questions[QuestionNumber]}`
        SetOptions()
    }

}

function SetOptions() {
    OptionDiv.innerHTML = `<div>
    <input type="radio" id="option1" name="options" value="${options[QuestionNumber][0]}">
    <label for="option1">${options[QuestionNumber][0]}</label>
</div>
<div>
    <input type="radio" id="option2" name="options" value="${options[QuestionNumber][1]}">
    <label for="option2">${options[QuestionNumber][1]}</label>
</div>
<div>
    <input type="radio" id="option3" name="options" value="${options[QuestionNumber][2]}">
    <label for="option3">${options[QuestionNumber][2]}</label>
</div>
<div>
    <input type="radio" id="option4" name="options" value="${options[QuestionNumber][3]}">
    <label for="option4">${options[QuestionNumber][3]}</label>
</div>`
    
}
