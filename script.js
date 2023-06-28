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

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password must be between 8 and 128 characters long");
    }
  } while (passwordLength < 8 || passwordLength > 128)

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

    chosenNum = 0;
    var tempPassword = [];
    var newPassword = "";
    capitalVar = false;
    lowerVar = false;
    specialVar = false;
    numberVar = false;

    function randomNum(highestNum) {
      return Math.floor(Math.random() * highestNum);
    }
    for (let i = 0; i < passwordLength; i++) {
      // console.log("comment")
      // pickMe is so that the password isn't a pattern of capital letter -> lowercase -> special char -> number
      var pickMe = randomNum(4);

      console.log("pickMe: " + pickMe);
      if (capitalInput == "Y" && pickMe == 0) {
        chosenNum = randomNum(capitalAlphabet.length);
        tempPassword[i] = capitalAlphabet[chosenNum];
        newPassword += tempPassword[i];
        capitalVar = true;
      }

      if (lowerInput == "Y" && pickMe == 1) {
        chosenNum = randomNum(lowercaseAlphabet.length);
        tempPassword[i] = lowercaseAlphabet[chosenNum];
        newPassword += tempPassword[i];
        lowerVar = true;
      }

      if (specialInput == "Y" && pickMe == 2) {
        chosenNum = randomNum(specialCharacters.length);
        tempPassword[i] = specialCharacters[chosenNum];
        newPassword += tempPassword[i];
        specialVar = true;
      }

      if (numberInput == "Y" && pickMe == 3) {
        chosenNum = randomNum(numbers.length);
        tempPassword[i] = numbers[chosenNum];
        newPassword += tempPassword[i];
        numberVar = true;
      }

      // This if-statement is so that in case none of the if-statements go through, i won't iterate without doing anything first
      if (capitalVar == false && lowerVar == false && specialVar == false && numberVar == false) {
        i = i - 1;
      }

      capitalVar = false;
      lowerVar = false;
      specialVar = false;
      numberVar = false;
    }

    if (capitalInput == "N" && lowerInput == "N" && specialInput == "N" && numberInput == "N") {
      newPassword = "Well then I guess you just don't want a password, then";
    }

    return newPassword;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
