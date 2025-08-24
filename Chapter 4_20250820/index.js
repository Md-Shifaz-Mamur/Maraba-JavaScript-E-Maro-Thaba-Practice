// Chapter 4
// Comparison 
const test = 12;
console.log(test);

console.log(5<10);
console.log(5>10);

console.log(5==10);
console.log(5!=10);

console.log(10<=10);

// Practice - Page 68 
// 1
const shifazEats = 5;
const rakibEats = 7;
console.log(rakibEats>shifazEats);

// 2
const myClass = 45;
const nextClass = 50;
console.log(myClass<nextClass);

// 3
const myNumber = 75;
const hisNumber = 75;
console.log(myNumber == hisNumber);

// 4
const savingsTarget = 100;
const currentSavings = 95;
console.log(currentSavings<savingsTarget); 

// 5
console.log(10!=7);

// 6
console.log(20<=15);

// 7
console.log(97<45);


// Practice - Page 70-71
// 1
const youngerBro = 10;
const me = 15;
console.log(youngerBro<=me);

// 2
const passMark = 33;
const obtainedMark = 45;
console.log(obtainedMark>=passMark);

// 3
const jambura = 100;
const kodbel = 80;
console.log(jambura>kodbel);



//4
const meRead = 10;
const friendRead = 10;
console.log(meRead==friendRead);

//5
const meBiscuit = 15;
const friendBiscuit = 20;
console.log(meBiscuit<friendBiscuit);

//6
const realMadrid = 2;
const barcelona = 3;
console.log(realMadrid<barcelona);

//7
const meName = "Abdur Rahim";
const frdName = "Abdul Karim";
console.log(meName==frdName);

//8
const iStudy = true;
const friendStudy = false;
console.log(iStudy==friendStudy);


// Practice: Page 73

//1
console.log(50=="50");
console.log(50==="50");

//2
console.log("JavaScript"=='JavaScript');
console.log("JavaScript"==='JavaScript');

/*Both of the outputs are true because string variables in single or double quotation mark, gives the same output and same data type as well.*/

//3
console.log(25=="25");
/*This will show True as output because '==' does not consider data type and hence it only gives the output based on Value. As the values are same, it shows True.*/


console.log(25==="25");

/*It will show 'False' as output because now '===' considers both the value and data type. As there are 2 different data types, 25 = number and "25" = string, therefore the output is shown "False".*/

// 4
console.log("apple"=="apple");
console.log("apple"==="apple");

/*Both are true as data type and variable are all the same in both cases.*/


// 5
console.log("test"=="TEST", "test"==="TEST");

// 6
const variableX = 15;
const variableY = "20"; 
console.log(variableX!=variableY,variableX!==variableY);

// 7
// const variableA = hello; //It will show error message 'cause string type variables cannot be written without single or double quotations 

const variableA = "hello"; //correct way 
const variableB = "Hello";
console.log(variableA==variableB, variableA===variableB);





