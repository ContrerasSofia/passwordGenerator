// Assignment code here
var lowerCase = document.querySelector("#lowerCase");
var specialCharacters = document.querySelector("#specialCharacters");
var uperCase = document.querySelector("#uperCase");
var numeric = document.querySelector("#numeric");
var lenght = document.querySelector("#lenght");
var validChar =" !%&()*+,-./:;<=>?@[\]^_`{|}~#$";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function validatePassword(){
  var isOk;
  do{
    isOk = true;
    password = generatePassword(lenght.value);
    if(lowerCase.checked){
      if(!validate(password,"abcdefghijklmnopqrstuvwxyz"))
        isOk = false;
    }
    if(uperCase.checked){
      if(!validate(password,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
        isOk = false;
    }
    if(numeric.checked){
      if(!validate(password,"0123456789"))
        isOk = false;
    }
     if(specialCharacters.checked){
      if(!validate(password,validChar))
        isOk = false;
    }
  }while(!isOk)
  return password;
}

function validate(password,characters){
  for (var i = 0; i < password.length; i++){
    if (characters.includes(password[i]))
      return true;
  }
  return false;
}

function generatePassword(lenght){
  var password = "";
  var index = 0;
  do{
    //generate random number
    let x = Math.floor((Math.random() * 127) + 32);
    //validate it's in the range, based on ascii table
    if( (uperCase.checked && (x > 64) && (x < 90)) || (lowerCase.checked && (x > 96) && (x < 123)) || (numeric.checked && (x > 47) && (x < 58)) || (specialCharacters.checked && validChar.includes(String.fromCharCode(x)))){
      //transform the number to a char
      password += String.fromCharCode(x);
      index++;
    }
  }while (index < lenght);
  return password;
}

// Write password to the #password input
function writePassword(event) {
  //validate that at least one option is selected 
  if(lowerCase.checked || specialCharacters.checked || uperCase.checked || numeric.checked){
    //verify the password lenght
    if (lenght.value < 129 && lenght.value > 7)
      document.querySelector("#password").textContent = validatePassword();
    else
      alert("Invalid lenght");
  }else
    alert("Select at least one option");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);