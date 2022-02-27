const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Wecome to password validator tool. What password would you like to validate?", function(input){
	tokens = input.split(' ');
	
	password = passwordArray =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	num1 = input [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	if (passwordArray === num1){console.log('success');}
	if (passwordArray !== num1){console.log('failure');}
	else{
        console.log('password too short');}
	
	

	


	console.log('password', passwordArray);
	console.log('num1', num1);
    console.log('string text line 1\n' +
    'string text line 2');
    // "string text line 1
    //string text line 2"

	// This line closes the connection to the command line interface.
	reader.close()

});