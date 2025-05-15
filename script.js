// const monthlyRent=500;
// const yearlyRent=monthlyRent * 12;
// const decadelyRent=monthlyRent * 10;
// console.log(yearlyRent);
// console.log(decadelyRent);

// const myName="joy"

// console.log(myName);
//  const firstName= "joy";
//  const lastName = "okoduwa"
// //  const sentence ="Hello " + firstName + " " + lastName + "! How are you?!";
// const sentence= `hello ${firstName}  ${lastName}! How are you?`;
//  console.log(sentence)
//   const myCountry = "Nigeria";
//   console.log(myCountry)
//    myCountry ="Italy";
//object

//  const myData = {
//     name:"joy",
//     sex: "female",
//     Age:"25",
//  }
//  console.log(myData)
//  console.log(typeof myData)
//  //Array
//   const myCars = ["Benz","BMW","Suzuki","Lexus", "Jeep","Toyota"];
// //   console.log(typeof myCars);
//   console.log(myCars[3]);

//   // Arithmetic Operators
//   const x = 2;
//   const y = 4;
//   const sum = x + y;
//const times = x * y;
// const  divide = y/x;
// const remainder = 2%4;

//   console.log(remainder)
  
//   //Assignment Operators
//   let z = 19;
// //   +=
// //   -+
// console.log(z--)
//   //Comparism Operators
//    let r = "Joy";
//    let s = "oge"
//    let t = 34;
//    let u = "Joy";
//    let v = 54;
//    console.log(r==u);
//    console.log(s==r);
//    console.log(v!=t);
//    console.log(r===u);

   //Logical Operators

   // //Joy's Admission Details
// const acceptanceFee = False;
//  const matriGown = True;
//  const textbooks = True;
//  const idCard = False;

//  const checkOR = acceptanceFee || matriGown || textbooks || idCard;
//  console.log(checkOR)

// Write a program that tells if a user is legible to vote

// let votingAge = 18;
// prompt("How old are you");
// if (votingAge<18){
//     alert("you are not eligible to vote")
// }else{
//     alert("you are eligible to vote");
// }

//boolean
// const passed = true;
// console.log(passed)
// //number
// let num = -300;
// console.log(num * 0);
// const isSkyBlue = false;
// if(isSkyBlue){
//     alert("The sky is blue")
// }else{
//     alert("This sky is not blue?")
// }

// // Write a programe to calculate the body mass index BMI and categorize it.

// const weight = parseFloat(prompt("enter your body weight"));
// const height = parseFloat(prompt("enter your height"));

// const BMI = weight / (height * height);

// if (BMI < 18.5) {
//   alert(`${BMI} means you are underweight`);
// } else if (BMI <= 24.9 && BM1 >= 18.5) {
//   alert(`${BMI} means you have a healthy weight`);
// } else if (BMI <= 29.9 && BMI >= 25) {
//   alert(`${BMI} means you are overweight`);
// } else {
//   alert("invalid");
// }
//comparism operator
// ===
// use tripple equals 
// const myVariable = 13;
// if(5*2 === myVariable){
//   alert("hurry they are equal");
// }
// else{
//   alert("oh no they are not equal");
// }
// const friendsATYourParty = parseInt(prompt("Number of friends coming for the party"));
// if(friendsATYourParty===10){
//   alert("lets party");
// }else if (friendsATYourParty===4){
//   alert("perfect amount to play some ludo");
// }else if (friendsATYourParty===0){
//   alert("I have all the food to myself");
// }else{
//   alert("no party");
// }

//loop
// const friensAtYourPary = 0;
// friensAtYourPary = friensAtYourPary + 1;
// console.log(friensAtYourPary);
//  let friendsAtYourParty= 6;
//  while(friendsAtYourParty<0){
//    friendsAtYourParty = friendsAtYourParty + 1;
//   //These are assignment operatorsthey do the same thing
//   //  friendsAtYourParty+=1;
// // ++friendsAtYourParty;
//   //friendsAtYourParty++;
//  }
//  console.log(friendsAtYourParty);
//for loop

// let myDrink =0;
// for(let i=0; i <=9; i++){
//   myDrink++;
// }
// console.log(myDrink);
// alert(myDrink)

// Write some code that declares two variables, character and timesToRepeact.
//   Using a loop, repeat that character that many times and then console.log it.
//   Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
//   'fffff'

// let character = "f";
// const timesToRepeat = 10;
// let answer="";
// for(let i=0; i < timesToRepeat; i++){
//   answer+= character;
// }
// console.log(answer);

// const lowerCase = "THis iS A wiErD cASE";
// console.log(lowerCase.toUpperCase());

// console.log(Math.max(4.6,3,6,9,10));

// const name = "Akhuemose";
// console.log(name.(4,3));


//functions

// function addNum(a,b){
//   return a*b
// }
// const myFunction = function (x,y) {
//   return x*y
// };
// let x = myFunction(4,3);
// console.log(x)

// myName("joy");

// function myName(a,b,c){
//   console.log(arguments.length);
// }
//arrow function
// const addNum =(x,y)=> x*y;

// const myObject ={
//   firstName:"Joy",
//   lastName:"Okoduwa",
//   fullName: function(){
//     return this.firstName + " " + this.lastName;
//   }
// }
// console.log(myObject.fullName());

// function greetUser(name){
//   console.log("Hello" +" "+ name + "!");
// }
// //call the function
// greetUser("Joy");
// greetUser("David");

// function addNumbers(num1, num2){
//   return num1 + num2;
// }
// const num1 = parseInt(prompt("Enter the first Number"));
// const num2 = parseInt(prompt("Enter the second Number"));

// const answer = addNumbers(num1,num2);
// alert(`${answer} is the sum`);
// console.log("Sum", answer)
// function checkEvenOdd(number){
//   if(number % 2 == 0){
//    return number + " is even"
//   }else{
//     return number + " is odd"
//   }
// }
//  const answerOne = checkEvenOdd(10);
// const answerTwo = checkEvenOdd(5);
// console.log(answerOne);
// console.log(answerTwo);

// function celsiusToFahrenheit (celsius){
//   return (celsius * 9/5) +32;
// }
// console.log("25°C is "  + celsiusToFahrenheit(25)+ "°F");
// function fahrenheitToCelsius(fahrenheit){
//   return (fahrenheit-32)*5/9;
// }
// console.log(fahrenheitToCelsius(50) +  "°F" +" is the same as 30°C" );
//  function findTheLargest(x,y,z){
//   if (x >=y && x >= z) {
//     return a;
//   }else if(y >= x && y >= z){
//     return y;
//   } else if(x===y && x===z ){
//     return "the three numbers are equal: " + x;
//   }else if(x===y && x > z){
//     return "the largest numbers are x and y " + x;
//   }else if(x===z && x<y){
//     return "the largest number is y " + y;
//   }else if (y===z && y > x){
//     return"the largest numbers are y and z " + z
//   }
//   else{
//     return z
//   }
//  }
//  console.log(findTheLargest(3,9,9));
//  console.log(findTheLargest(4,8,4));

// forEach is a function that accepts a function

// const someFunction = function() {
//   return 5
// };
// const someOtherFunction = function(fn){
//   return fn()
// }
// someOtherFunction(someFunction);

const cities =[
  "lagos","Abuja","ikeja","Ibadan"
];
cities.forEach(function(cityNames, index){
  console.log(cityNames, index);
});

//map
const newCities = cities.map(function(cityNames){
  return cityNames.toUpperCase()
});
console.log(newCities);
console.log(cities)
