// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordLength = window.prompt("Choose password length between 8 and 128 characters long");
  console.log(passwordLength);
  var isNotNumber = isNaN(passwordLength);
  if (isNotNumber) {
    window.alert("Your entry has to be a number!");
    return;
  } 
  if (passwordLength < 8 || passwordLength > 128 ){
      window.alert("Your entry is less than 8 or more than 128! Make a valid entry.");
      return;
  }
  
  var passwordType1 = window.prompt("Would you like to include lowercase letters? Answer 'Yes' or 'No'.");
  if (!(passwordType1 == "Yes") && !(passwordType1 == "No")){
    window.alert("You entered invalid answer! Answer 'Yes' or 'No'.")
    return;
  }

  var passwordType2 = window.prompt("Would you like to include uppercase letters? Answer 'Yes' or 'No'.");
  if (!(passwordType2 == "Yes") && !(passwordType2 == "No")){
    window.alert("You entered invalid answer! Answer 'Yes' or 'No'.")
    return;
  }

  var passwordType3 = window.prompt("Would you like to include numeric characters? Answer 'Yes' or 'No'.");
  if (!(passwordType3 == "Yes") && !(passwordType3 == "No")){
    window.alert("You entered invalid answer! Answer 'Yes' or 'No'.")
    return;
  }

  var passwordType4 = window.prompt("Would you like to include special characters? Answer 'Yes' or 'No'."); 
  if (!(passwordType4 == "Yes") && !(passwordType4 == "No")){
    window.alert("You entered invalid answer! Answer 'Yes' or 'No'.")
    return;
  }
  
  if (passwordType1 == "No" && passwordType2 == "No" && passwordType3 == "No" && passwordType4 == "No"){
    window.alert("Choose at least one type of characters to include into your password!")
    return;
  }
  var password = generatePassword(passwordLength, passwordType1, passwordType2, passwordType3, passwordType4);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(passwordLength, passwordType1, passwordType2, passwordType3, passwordType4) {
  return "password";
/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
