const palindrome = "BOBABEBABOB";
const notAPalindrome = "BOBBY";

const isAPalindrome = function(word){
  for(let i = 0; i < word.length; i++) {
    if(word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
const countOccurences = function(character, string){
  let occurences = 0
  for(let i = 0; i < string.length; i++) {
    if(string[i] === character) {
      occurences++;
    }
  }
  return occurences
}

const findDuplicate = function(numbers){
  const duplicates = [];
  for(let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if(numbers.indexOf(currentNumber) != i && duplicates.indexOf(currentNumber) === -1) {
      duplicates.push(currentNumber);
    }
  }
  return duplicates
}

const translate = function(number){
  const aConstant = "a";
  const aCode = aConstant.charCodeAt(0);
  const string = String(number);
  let translatedString = "";
  for(let i = 0; i < string.length; i++){
    translatedString += String.fromCharCode(aCode + Number(string[i]) - 1);
  }
  return translatedString;
}

console.log(translate(123456))

// console.log(findDuplicate([1,2,3,4,5,3,7,8,7,7]))

// console.log(countOccurences('s', 'password'))
// console.log(countOccurences('x', 'password'))

// console.log(isAPalindrome(palindrome))
// console.log(isAPalindrome(notAPalindrome))

