// const name = "Quentin";

// console.log("\n Hello, "+name);
// console.log(`\n Hello, ${name}.`);
// console.log(" First node project running! \n");

// console.log(__dirname);
// console.log(__filename);

// process.stdout.write("\nHello from Standard Output.\n\n");
process.stdout.write("\nWhat is your name?\n\n");

process.stdin.on("data", function(answer){
	process.stdout.write(`\nHello, ${answer}\n`);
	process.exit();
});
