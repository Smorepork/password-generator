const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNoSpecials = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

const charactersNoNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let includeNumbers = document.getElementById("include-numbers");
let includeSpecials = document.getElementById("include-specials");
let passwordLength = document.getElementById("password-length");

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")


function generatePasswords(){
if (includeNumbers.checked==true && includeSpecials.checked==true){
    passwordEl1.innerText = generateRandomString(passwordLength.value,characters)
    passwordEl2.innerText = generateRandomString(passwordLength.value,characters)
}
else if (includeNumbers.checked==true && includeSpecials.checked==false){
    passwordEl1.innerText = generateRandomString(passwordLength.value,charactersNoSpecials)
    passwordEl2.innerText = generateRandomString(passwordLength.value,charactersNoSpecials)
 
}
else if (includeNumbers.checked==false && includeSpecials.checked==true){
    passwordEl1.innerText = generateRandomString(passwordLength.value,charactersNoNumbers)
    passwordEl2.innerText = generateRandomString(passwordLength.value,charactersNoNumbers)
 
}
else {
   passwordEl1.innerText = generateRandomString(passwordLength.value,charactersAlphabet)
    passwordEl2.innerText = generateRandomString(passwordLength.value,charactersAlphabet)
}
}

// Generation of Password, functional
function generateRandomString(a,b){
    let passwordString =''
    for (let i=0;i<a;i++){
        let randomIndex = Math.floor(Math.random()*b.length)
            passwordString+=b[randomIndex]
            
           
    }
     return passwordString
}



// function generatePassword(){
//     if
// if include numbers and include specials is clicked use characters
// if include numbers is clicked and include specials is not clicked use charactersNoSpecials
// if include specials is clicked and include numbers is not clicked use charactersNoNumbers
// if none are clicked use charactersAlphabet