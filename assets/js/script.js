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

var passwordOptions = function () {
  //selecting length 
  var passLength = parseInt (
    prompt("How many characters would you like your password to be? (Select a number 10-129)")
    );
    //If invalid number return to question
    if (passLength <= 9 || passLength > 129) {
      alert("Pick a value between 10 - 129!");
      return;
    } 
    //Return if entry is NaN (Not a number)
    if(isNaN(passLength) === true) {
      alert("Pick a number that is between 10 - 129!");
      return;
    }

 //For selecting lowercase
 var chooseLowerCase = confirm (
  "Should your password have lower case letters?"
);
  //For selecting uppercase
  var chooseUpperCase = confirm (
    "Should your password have upper case letters?"
  );
//For selecting special characters
var chooseSpecialChar = confirm( 
  "Should your password have special characters?"
);
//For selecting numbers
var chooseNum = confirm (
"Should your password have numbers?"
);

if (selectedCharacters === null || selectedCharacters === "") {
    window.alert("You must select at least one character type. Please try again.");
    return generatePassword();
} 

 //Object to store the input
 var passwordInput = {
  passLength: passLength,
  chooseSpecialChar: chooseSpecialChar,
  chooseLowerCase: chooseLowerCase,
  chooseUpperCase: chooseUpperCase,
  chooseNum: chooseNum
};
return passwordInput;
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