const fs = require("fs");

process.stdout.write(`\n###- Hello and welcome to the Quiz -###\n`);

var fileName = "./filesystem/files/";

var date = new Date();

date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

(function(){
	process.stdout.write("\nWhat is your name?\n\n");

	process.stdin.on("data", function(answer){
		fileName = `${fileName}${answer.toString().trim()}-${date}.txt`

		fs.writeFile(fileName, `Quiz answers for ${answer.toString().trim()} on ${date}`, (err) => {
			if(err){
				console.log("Error");
				console.log(err);
			} else{
				startQuiz();
			};
		});
	})
}());

function startQuiz(){
	const questions = [
		"What do you call a deer with no eyes?",
		"What do you call a deer with no eyes and no legs?",
		"What is brown and sticky?",
		"What is the answer to life, the universe and everything?",
		"What is the plastic part at the end of your shoelaces called?",
		"Why did they shut the gates to Helheim?"
	];

	const answers = [
		"No idea",
		"Still no idea",
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

		let questionNumber = usersAnswers.length;
		let inputAnswer = answer.toString().trim();

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
		process.stdout.write(`\nQuiz complete.\n`);

		process.stdout.write(`\nYour answers:\n`);

		var toAppend;

		for(var i = 0; i < questions.length; i++){
			process.stdout.write(`\nQ: ${questions[i]}\n`);
			process.stdout.write(`A: ${answers[i]}\n`);
			process.stdout.write(`I: ${usersAnswers[i]}\n`);

			toAppend += `\n\nQ: ${questions[i]}`;
			toAppend += `\nA: ${answers[i]}`;
			toAppend += `\nI: ${usersAnswers[i]}`;
		}

		let correctBar = "[";

		for(i = 0; i < correct; i++){
			correctBar = correctBar+"C";
		}

		for(i = 0; i < (questions.length - correct); i++){
			correctBar = correctBar+"X";
		}

		correctBar = correctBar+"]";

		process.stdout.write(`\nYou got ${correctBar} ${correct}/${questions.length} questions correct\n\n`);

		fs.appendFile(fileName, toAppend, (err) => {
			if(err){
				console.log("Error");
				console.log(err);
			} else{
				console.log("File appended");
			}
		})
	});
}
