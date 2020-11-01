// Assignment code here
alert("Press Generate to get your custom password!");

//Object Code to store the input

const randomFunctions = {
  lowerCase: randomLowerCase,
  upperCase: randomUpperCase,
  number: randomNumber,
  symbols: randomSymbol,
};

//functions here (4)

//function for random lowercase-- using method from charcode 97-122

function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//function for random uppercase -- using charcode
function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//function for random #'s -- using charcode
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//function for random special characters -- using a variable for random symbols
function randomSymbol() {
  const symbols = "~`+\|!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
