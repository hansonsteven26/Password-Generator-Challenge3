// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var capitalInput = "";
var lowerInput = "";
var specialInput = "";
var numberInput = "";
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitalAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "_", "[", "]", "|", "{", "}", ";", ":", "\"", "\\", "\'", "/", "?", ".", ",", ">", "<"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// Write password to the #password input

function writePassword() {

  do {
    passwordLength = window.prompt("How many characters do you want your password to be? Must be between 8 and 128");
    capitalInput = capitalInput.toUpperCase();

    if (capitalInput != "Y" && capitalInput != "N") {
      window.alert("Please enter a number");
    }
  } while (passwordLength != 0)

  do {
    capitalInput = window.prompt("Do you want any capital letters? Y/N");
    capitalInput = capitalInput.toUpperCase();

    if (capitalInput != "Y" && capitalInput != "N") {
      window.alert("Please enter \"Y\" or \"N\"");
    }
  } while (capitalInput != "Y" && capitalInput != "N")

  do {
    lowerInput = window.prompt("Do you want any lowercase letters? Y/N");
    lowerInput = lowerInput.toUpperCase();

    if (lowerInput != "Y" && lowerInput != "N") {
      window.alert("Please enter \"Y\" or \"N\"");
    }
  } while (lowerInput != "Y" && lowerInput != "N")

  do {
    specialInput = window.prompt("Do you want any special characters? Y/N");
    specialInput = specialInput.toUpperCase();

    if (specialInput != "Y" && specialInput != "N") {
      window.alert("Please enter \"Y\" or \"N\"");
    }
  } while (specialInput != "Y" && specialInput != "N")

  do {
    numberInput = window.prompt("Do you want any numbers? Y/N");
    numberInput = numberInput.toUpperCase();

    if (numberInput != "Y" && numberInput != "N") {
      window.alert("Please enter \"Y\" or \"N\"");
    }
  } while (numberInput != "Y" && numberInput != "N")

  function generatePassword() {

    var tempPassword = "";

    function randomNum(highestNum) {
      return Math.floor(Math.random() * highestNum);
    }
    
    if (capitalInput == "Y") {
      randomNum(capitalAlphabet.length);
    }

    if (lowerInput == "Y") {

    }

    if (specialInput == "Y") {

    }
    
    if (numberInput == "Y") {

    } 

    return
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
