var questions = ["What is the Capital of India ?",
    "Who is the Prime Minister of India ?",
    "Which is the National Animal of India ?",
    "Which is the National Bird of India ?",
    "How many States are in India ?",
    "Which is the largest coffee-producing state of India ?",
    "Which is India's largest city by population ?",
    "What is the National Fruit of India ?",
    "What is the National Sport of India ?",
    "Which festival is celebrated in India as the festival of colours ?"]

var answers = ["New Delhi",
    "Narendra Modi",
    "Tiger",
    "Peacock",
    "28",
    "Karnataka",
    "Mumbai",
    "Mango",
    "Hockey",
    "Holi"]

var options = [["Kolkata", "New Delhi", "Mumbai", "Bengaluru"],
["Amit Shah", "Ram Nath Kovind", "Narendra Modi", "Nitin Gadkari"],
["Tiger", "Lion", "Elephant", "Panther"],
["Parrot", "Peacock", "Sparrow", "Eagle"],
["27", "29","30", "28"],
["Karnataka","Arunachal Pradesh", "Assam", "Kerala"],
["Delhi", "Bengaluru", "Mumbai", "Chennai"],
["Apple", "Mango", "Banana", "Grapes"],
["Cricket", "Hockey", "Kabaddi", "Football"],
["Diwali", "Holi", "Dussehra", "Makar Sankranti"]]


var QuestionNumber = 0; // for current question no. we r on
var OptionNumber = 0;
var TotalQuestions = questions.length; // to measure the size of array and store it.
var progress = 0
var IncFactor = 100 / TotalQuestions   // amount of marks in percentage that are being awarded for each question 

const QuestionDiv = document.getElementsByClassName("question")[0] // QuestionDiv stores the html element which has class name as question
QuestionDiv.innerHTML = `<p>${QuestionNumber + 1}. ${questions[QuestionNumber]}</p>`
console.log(questions[0])

const OptionDiv = document.getElementsByClassName("option")[0]
SetOptions()
console.log(options[0])



function nextbclick() {
    if (QuestionNumber < TotalQuestions - 1) { //here we wrote it bcz it has the value of 5 but we want to go upto only 4
        QuestionNumber++
        QuestionDiv.innerHTML = `<p>${QuestionNumber + 1}. ${questions[QuestionNumber]}</p>`/*Here P tag is added becaues we want the question from the question class to be centered  */
       OptionNumber++
        SetOptions()
    }

}

function prevbclick() {
    if (QuestionNumber >= 1) {
        QuestionNumber--
        QuestionDiv.innerHTML = `<p>${QuestionNumber + 1}. ${questions[QuestionNumber]}</p>`/*Here P tag is added becaues we want the question from the question class to be centered  */
        OptionNumber--
        SetOptions()
    }

}

function SetOptions() {
    OptionDiv.innerHTML = `<div>
    <input type="radio" id="option1" name="options" value="${options[OptionNumber][0]}">
    <label for="option1">${options[OptionNumber][0]}</label>
</div>
<div>
    <input type="radio" id="option2" name="options" value="${options[OptionNumber][1]}">
    <label for="option2">${options[OptionNumber][1]}</label>
</div>
<div>
    <input type="radio" id="option3" name="options" value="${options[OptionNumber][2]}">
    <label for="option3">${options[OptionNumber][2]}</label>
</div>
<div>
    <input type="radio" id="option4" name="options" value="${options[OptionNumber][3]}">
    <label for="option4">${options[OptionNumber][3]}</label>
</div>`
    
}

function submitbclick() {
    
}
