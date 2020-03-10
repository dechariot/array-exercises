const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

let inventorsNameStartWithA = [];
let inventorsContainN = [];
let inventorsTwiceSame = [];
let numberOdd = [];
let number2Digits = [];
let inventorsFirstName = [];
let toUpperCaseName = [];
let initialsName = [];
let multiplied100 = [];
let pow3 = [];
let sortAZ = [];
let sortZA = [];
let totalNum = [];
let resultArea = [];
let RegD = /(\b\S+\b)\s+\b\1\b/


//FILTER
//inventors name start with "a"
inventorsNameStartWithA = inventors.filter((name) => {
  if (name.charAt(0)==="A"){
    return name;
  };
});

console.log('The inventors have first letter of name is "a" are ',inventorsNameStartWithA)

//inventors name contain "n"
inventorsContainN = inventors.filter((name)=> {
  if (name.includes("n"))
  return name;
})

console.log('The inventors have a name which cotain "n" are ',inventorsContainN)

//inventors name have twice 1st letter in row
inventorsTwiceSame = inventors.filter((name)=> {return name.split(RegD)})
console.log('The inventors have same twice 1st letter name are ',inventorsTwiceSame)
//Print out an array of the numbers which are odd.
numberOdd = numbers.filter((num)=> {
  return num % 2 === 1;});
console.log(numberOdd);

//Print out an array of the numbers that have two digits.
number2Digits = numbers.filter((num)=> {
  if (num > 9 && num < 100)
  return num;
});
console.log(number2Digits);

//Print out an array of the numbers which are prime.
console.log("Print out an array of the numbers which are prime.",isPrime = numbers.filter((n)=>{const regex = /^(11+?)\1+?$/; return !('1'.repeat(n).match(regex))}));

//Print out the first name of each inventor.
inventorsFirstName = inventors.map((firstName)=>{
  return firstName.split(" ",1);
});
console.log("Print out the first name of each inventors", inventorsFirstName);

//Print out the length of every inventor's full name.
lengthInventors = inventors.map((name)=> {
  return name.length - 1; // - 1 spacebar
})
console.log("Print out the length of every inventor's full name.", lengthInventors);

//Print out all the inventors' names in uppercase.
toUpperCaseName = inventors.map((name)=> {
  for (i=0 ; i < name.length; i++) {
    return name.toUpperCase();
  };
});
console.log("Print out all the inventors' names in uppercase:",toUpperCaseName);

//Print out initials of all inventors(e.g. A.E., I.N., ...)
console.log(" Print out initials of all inventors(e.g. A.E., I.N., ...)",inventors.map((name)=>{
  let nameSplit=name.split(" ");
  initials =""; 
  for(let i=0;i<nameSplit.length;i++){
    initials+=nameSplit[i].charAt(0)
  };
}))
//Print out an array of every number multiplied by 100.
console.log("Print out an array of every number multiplied by 100", multiplied100 = numbers.map(num=>num*100));

//Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
console.log("Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).")


//SORT
//Sort all the inventors in alphabetical order, A-Z.
console.log("Sort all the inventors in alphabetical order, A-Z",sortAZ=inventors.sort())

//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
console.log("Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method", sortZA=inventors.sort((a,b)=>{if (a>b){return -1}; if (a<b){return 1}return 0;}));

//Sort all the inventors by length of name, shortest name first.
console.log("Sort all the inventors by length of name, shortest name first.", sortAZ=inventors.sort((a,b)=>{if(a.length > b.length){return 1}; if(a.length < b.length){return -1}; return 0; }));
console.log(inventors.sort((a,b)=>a.length-b.length))

//Sort all the inventors by length of name, longest name first. Do not use the reverse method.
console.log("Sort all the inventors by length of name, shortest name first.", sortZA=inventors.sort((a,b)=>{if(a.length > b.length){return -1}; if(a.length < b.length){return 1}; return 0; }));
console.log(inventors.sort((a,b)=>b.length-a.length))


//REDUCE
//Find the sum of all the numbers.
console.log("Find the sum of all the numbers",totalNum = numbers.reduce((total,num)=>total += num));

//Find the sum of all the even numbers.
console.log("Find the sum of all the even numbers",totalNum=numberOdd.reduce((total,num)=>total+=num))

//Create a string that has the first name of every inventor.
console.log("Create a string that has the first name of every inventor.")

//Create a string that has the first name of every inventor.
console.log("Create a string that has the first name of every inventor.",resultArea=inventorsFirstName.reduce((prevVal,currVal,idx)=>idx==0 ? currVal: prevVal + "," + currVal));
//instead of using reduce => join()
console.log("Create a string that has the first name of every inventor.",resultArea=inventorsFirstName.join(","))


//SOME & EVERY
//Does any inventor have the letter 'y' in their name?
console.log("Does any inventor have the letter 'y' in their name?",resultArea=inventors.some((name)=>{if(name.includes("y")){return}}));

//Does every inventor have the letter 'e' in their name?
console.log("Does every inventor have the letter 'e' in their name?", resultArea=inventors.every((name)=>{if(name.includes("e")){return}}));

//Does every inventor have first name that's longer than 4 characters?
console.log("Does every inventor have first name that's longer than 4 characters?", resultArea = inventorsFirstName.every((name)=>{if(name.length>4){return}}));

//Find the inventor that has a middle name.
// console.log("Find the inventor that has a middle name.",resultArea = inventors.find((name)=>{if(name.findIndex() > 3 ){return name}}));

// inventors.findIndex(function(" "))



/// TIPS
let number = 3; 
if (number < 1) {
  console.log("number < 1")
} else {
  console.log("number > 1")
}
//short way
number<1?"number>1":"number>1"