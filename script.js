// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    const passLength = document.getElementById("pass-length").value
    if(passLength > 32) return alert("Max length is 32 chars")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
const generateRandomString = () => {
    return 'xxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
}


function generatePassword(){
    const passLength = document.getElementById("pass-length").value
    const upperCaseChecked = document.getElementById("uc").checked
    const specialCharsChecked = document.getElementById("schars").checked
    // const numsChecked = document.getElementById("nums").checked
    

    //split the string to array
    const randomString = generateRandomString().split("")

    //get random n characters //the password
    let randomPassLength = randomString.sort(() => .5 - Math.random()).slice(0,passLength)
    
    //check for each options // creat array
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRESTUVWXYZ".split("")
    const specialChars = "@#!()$%#%^&*()_+=-".split("");

    if(upperCaseChecked){
     //get the random letter to be included in the password
     const item = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]

     //get the index to be replaced from the random password
    const index = Math.floor(Math.random() * randomPassLength.length)
    
    //replace the random password with the new letter
    randomPassLength[index] = item;

     
    }
    if(specialCharsChecked){
        //same stuff
        const item = specialChars[Math.floor(Math.random() * specialChars.length)]
        console.log(item);

        //  get index
        const index = Math.floor(Math.random() * randomPassLength.length)
        randomPassLength[index] = item;

    }

    //convert the array to string and return it
    return randomPassLength.join("")
    
    
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);