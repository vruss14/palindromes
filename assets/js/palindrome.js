document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('palindrome-form').addEventListener('submit', function(event) {
    let userInput = document.getElementById('userInput').value;
    event.preventDefault();

    if(palindrome(userInput)) {
        document.getElementById('palindrome-result').textContent = `${userInput} is a palindrome.`;
        document.getElementById('userInput').value = '';
        return;
    }
    document.getElementById('palindrome-result').textContent = `${userInput} is not a palindrome.`;
    document.getElementById('userInput').value = '';
  })
});

export const palindrome = (str) => {
    // Make a copy of the original string; don't modify/alter the original
    let inputStr = str;
  
    // Regex check for only letters and numbers
    let alphaNumeric = /[a-z0-9]/ig;
  
    let inputArr = inputStr.split('');
  
    // If the character is not a letter or number, splice it out
    for(let i=0; i < inputArr.length; i++) {
      if(!inputArr[i].match(alphaNumeric)) {
          inputArr.splice(i, 1);
        }
    }
  
    let newArr = inputArr.filter(element => element !== ' ')
  
    // Join the array together and make all characters lowercase
    // For a palindrome, the reversed string should match the normal string exactly
  
    let editedStr = newArr.join('').toLowerCase();
    let reversedStr = newArr.reverse().join('').toLowerCase();

    if(editedStr === reversedStr) {
      return true;
    }
    return false;
}
