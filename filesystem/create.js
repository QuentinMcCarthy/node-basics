const fs = require("fs");

fs.writeFile("./files/message.txt", "Hello Node.js", (err) => {
	if(err) throw err;
	console.log("File created");
});
