// --------------------- Chapter 31 - 34 (Date & Time) ------------------------------

// 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
var dObj = new Date();

// 2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
var dObj = new Date();
var dStr = dObj.toString();

// 3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
var d = new Date();
var day = d.getDay();

// 4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
alert(dayNames[day]);


// 5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
var d = new Date();

var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var millisecond = d.getMilliseconds();

// 6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
var d = new Date(2020, 11, 31);

// 7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
var d = new Date(1992, 1, 2);

// 8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
var d = new Date(1980, 0, 1);

// 9. How do you change the year of a date in JavaScript?
var d = new Date();
d.setFullYear(2023);

// 10. Write a JavaScript function to change the month of a given date to January.
function changeMonthToJanuary(date) {
    date.setMonth(0);
}


// -----------------------------  Chapter 35 - 37 (Functions) ------------------------------------------------

// 1. Code the first line of a function displayAlert.
function displayAlert(){}


// 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
function askName(){
    var userName = prompt("Enter name");
}
  
// 3. Code a function that calls 2 other functions.
function callFunctions(){
    askName();
    displayAlert();
}

// 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
function displayPrompt(){
    var name = prompt("Enter name");
    alert(name);
}

// 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
function concat(a, b, c){}

// 6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
function concat(a, b){}

// 7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
function multiply(a, b, c){
  
}

// 8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function calculateAverage(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
    return sum / numbers.length;
}

// 9. Write a JavaScript function that takes two parameters and returns their sum.
function sum(a, b){
    return a + b;
}

// 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function calculateAverage(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
    return sum / numbers.length;
}

// 11. You have to capture the returned value from a function and store it in a variable?
var result = functionName(arguments);  

// 12. Write a function which tells letter counts of (word).
function countLetters(word){
    var letterCounts = {};
    for (var i = 0; i < word.length; i++){
      var letter = word[i];
      if (letterCounts[letter]){
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
    return letterCounts;
} 
  
// 13. Write a function to set (year) in date object.
function setYear(date, year){
    date.setFullYear(year);
}

// 14. Write a function which tells the age of a person who Born on (dateOfBirth)
function calculateAge(dateOfBirth){
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
}
  
// 15. Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false.
function isPresent(word, array){
    for (var i = 0; i < array.length; i++){
      if (array[i] === word){
        return true;
      }
    }
    return false;
  }

// 16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)
function repeatLetter(letter){
    return letter.repeat(10);
}

// 17. write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse()
function reverseArray(array){
    return array.reverse();
}
var rev = reverseArray(["a","b","c","d","e"])
alert(rev);
  
// 18. Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223
function reverseArray(array){
    return array.reverse();
}
var rev = reverseArray([3,2,2,4,3])
alert(rev);


// 19. Write a JavaScript function that checks whether a passed string is a palindrome or not? Hint: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or Wow.
function palindromeCheck(value){
    var splitted = value.split("").reverse();
    var reversed = splitted.join("");

    if (reversed === value){
        return "it is a Palindrome";
    }
    else{
        return "It is not a Palindrome";
    }
}
var check = palindromeCheck("madam");
alert(check);


// 20. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function upperCase(value){
    var splitted = value.split(" ");
    for (var i=0; i<splitted.length; i++){
        splitted[i] = splitted[i].slice(0,1).toUpperCase() + 
        splitted[i].slice(1).toLowerCase();
    }
    var capitilized = splitted.join(" ");
    return capitilized;
    
}
var cal = upperCase("the quick brown fox");
alert(cal);


// 21. Write a JavaScript function that takes an array of numbers and finds the lowest and greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 1,5

function findMinMax(numbers) {
    if (numbers.length === 0) {
      return "Array is empty";
    }
  
    let min = numbers[0];
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
  
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return [min, max];
  }
  
  // Sample array
  const numbersArray = [1, 2, 3, 4, 5];
  
  // Call the function
  const result = findMinMax(numbersArray);
  
  // Output
  console.log("Lowest and greatest numbers:", result.join(","));
  


// -------------------------- Chapter 38 (Local vs. Global Variables) -------------------------


// 1. Write a JavaScript function that demonstrates the usage of a local variable.
function localVariable(){
    var localVar = "I am a local variable";
    console.log(localVar);
}

// 2. How can you access a global variable inside a function in JavaScript?
// you can access a global variable inside a function directly, as long as the variable is declared in the global scope. 



// ------------------------ Chapter 39, 40 (Switch Statements) -------------------------------

// 1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
function switchStatement(value){
    switch(value){
      case 1:
        console.log("Value is 1");
        break;
      case 2:
        console.log("Value is 2");
        break;
      case 3:
        console.log("Value is 3");
        break;
      default:
        console.log("Value is not 1, 2, or 3");
    }
}

// 2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user

function switchStatement(cityName){
    switch(cityName){
      case "Lahore":
        alert("Lahore is the capital of Punjab");
        break;
      case "Karachi":
        alert("Karachi is the capital of Sindh");
        break;
      case "Islamabad":
        alert("Islamabad is the capital of Pakistan");
        break;
      default:
        alert("City not found");
    }
}