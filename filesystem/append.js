const fs = require("fs");

const content = "This is the content which we want added to the file.\n";

fs.appendFile("./files/append.txt", content, (err) => {
	if(err){
		console.log("Error");
		console.log(err);
	} else{
		console.log("File appended");
	}
})
