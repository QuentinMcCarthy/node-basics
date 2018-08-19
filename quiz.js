process.stdout.write(`\n###- Hello and welcome to the Quiz -###\n`);

var questions = [
	"What do you call a deer with no eyes?",
	"What is brown and sticky?",
	"What is the answer to life, the universe and everything?",
	"What is the plastic part at the end of your shoelaces called?",
	"Why did they shut the gates to Helheim?"
];

var answers = [
	"No idea",
	"A stick",
	"42",
	"An aglet",
	"Because people were dying to get inside"
];

var usersAnswers = [];

var correct = 0;

function askQuestion(i){
	process.stdout.write(`\nQ: ${questions[i]}\n\n`);
}

process.stdin.on("data", function(answer){
	// process.stdout.write(`I: ${answer}`);
	// process.exit();

	var questionNumber = usersAnswers.length;
	var inputAnswer = answer.toString().trim();

	if(inputAnswer == answers[questionNumber]){
		// process.stdout.write(`\nCorrect.\n\n`);
		correct++
		usersAnswers.push(inputAnswer);

		if(usersAnswers.length < answers.length){
			askQuestion(usersAnswers.length);
		} else{
			process.exit();
		}
	}else{
		// process.stdout.write("\nIncorrect. Try again.\n\n");

		usersAnswers.push(inputAnswer);

		if(usersAnswers.length < answers.length){
			askQuestion(usersAnswers.length);
		} else{
			process.exit();
		}
	}
});

askQuestion(0);

process.on("exit", function(){
	// process.stdout.write(`Congratulations. Quiz complete.\n\n`);
	process.stdout.write(`Quiz complete.`);
	process.stdout.write(`\nYou got ${correct}/${questions.length} questions correct\n\n`);
});
