let input = "";

const inputText = document.querySelector("#text-input");

const button1 = document.querySelector("#check-btn");

const resultText = document.querySelector("#result");

button1.onclick = checkPalindrome;

function checkPalindrome() {
  if (inputText.value === "") {
    window.alert("Please input a value")
  }
  else {
    let word = inputText.value;
    if (findPalindrome(word)) {
      result.innerText = word + " is a palindrome"
    }
    else {
      result.innerText = word + " is not a palindrome"
    }
  }  
}

function findPalindrome(word) {
  let pal = word;
  pal = word.toLowerCase();
  pal = pal.replace(/\W/g, '');
  pal = pal.replace('_', '');
  pal = pal.split("").reverse().join("");
  if(pal === word.toLowerCase().replace(/\W/g, '').replace('_', ''))
    return true; 
  else
    return false;
}

