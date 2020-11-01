// Assignment code here
alert("Press Generate to get your custom password!");

//Array of lower case letters
var lowerCaseLetters = ["a","b","c","d","e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Array of uppercase letters
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Array of special characters 
var specialCharacters = ["`", "!", "@", "#", "$", "%", "^","&", "*", "(", ")", "=", "+", "{", "}", "[", "]", "|", ":", ";", "'", ".", "<", ">", "?", "/" ];

//Array of numbers
var numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//variable for storing user input
var selectedCharacters = ''


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