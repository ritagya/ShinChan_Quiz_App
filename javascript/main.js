var questions = [{
	question : "What is Shin Chan's last name?",
	answer : "nohara"
}, 
{
	question : "What is the name of Shin Chan's dog?",
	answer : "shiro"
}, 
{
	question : "What color is Shin Chan's dog?",
	answer : "white"
}, 
{
	question : "What colored T-shirt does Shin Chan always wear?",
	answer : "red"
}, 
{
	question : "How many siblings does Shin Chan have?",
	answer : 1
}, 
{
	question : "What is Shin Chan's favorite superhero show?",
	answer : "action kamen"
}, 
{
	question : "What is the name of Shin Chan's mother?",
	answer : "mitzi"
}
]

for(var i = 0; i < questions.length; i++){
	document.getElementById('question' + [i]).textContent = questions[i].question 
}

function result(){
	var correct = 0
	var incorrect = 0
	for(var i = 0; i < questions.length; i++){
	var userAnswer = document.getElementById('answer' + [i]).value
	userAnswer = userAnswer.toLowerCase()

	if(userAnswer == questions[i].answer){
		correct++
		document.getElementById('answer' + [i]).className = "correct"
	}
	else{
		incorrect++
		document.getElementById('answer' + [i]).className = "incorrect"
	}
}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}


















