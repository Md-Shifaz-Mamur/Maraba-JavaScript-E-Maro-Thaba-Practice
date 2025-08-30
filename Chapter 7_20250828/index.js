// Chapter Seven 
// Loop
const numbers = [12, 98, 45, 63, 21, 72];
for (const num of numbers) {
    console.log(num);
}

const fruits = ['orange', 'apple', 'banana', 'jackfruit', 'watermelon'];
for (const items of fruits) {
    console.log(items);
}

// Practice 
// Page: 105 - 106 
// 1
const favSubjects = ['Bangla', 'English', 'Math', 'Physics', 'Chemistry'];
for (const item1 of favSubjects) {
    console.log(item1);
}

// 2
const favFoods = ['Biryani', 'Fried Rice', 'Pasta', 'Momo'];
for (const item2 of favFoods) {
    console.log(item2);
}

// 3
const dob = ['1987', '1996', '2003']
for (const item3 of dob) {
    console.log(item3);
}

// 4
const players = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11',];
for (const item4 of players) {
    console.log(item4);
}

// 5
const examDates = ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5'];
for (const item5 of examDates) {
    console.log(item5);
}


// While Loop
let number1 = 0;
while (number1 < 5) {
    console.log(number1);
    // number1 = number1 + 1.0015;
    // number1 += 1;
    number1++;

}

let number2 = 0;
while (number2 < 5) {
    console.log('Bamboo Eating High School');
    number2 = number2 + .25;
}

// Practice 
// 1
let num4 = 0;
while (num4 < 10) {
    console.log("I will practice programming for three hours everyday, in sha Allah!");
    num4 = num4 + 1;
}

// 2
let num5 = 1;
while (num5 < 21) {
    console.log(num5);
    num5 = num5 + 1;
}

/*......................*/

// let num50 = 1;
// while (num50 < 51) {
//     console.log(num50);
//     num50 = num50 + 1;
// }

/*......................*/

// 3
let num100 = 50;
while (num100 < 101) {
    console.log(num100);
    num100 = num100 + 1;
}

// 4
let numNew = 1;
while (numNew <= 10) {
    console.log(numNew * 3);
    numNew = numNew + 1;
}

// 5
let number5 = 101;
while (number5 <= 110) {
    console.log(number5 / 2);
    number5 = number5 + 1;
}

// let number5 = 111; // The code doesn't run 'cause 111 > 110
// while(number5<=110){
//     console.log(number5/2);
//     number5 = number5 + 1;
// } 

// Summation 

let num = 1;
let sum = 0;
while (num <= 10) {
    console.log(num);
    sum = sum + num;
    num++;
    console.log('Sum: ', sum);
}


// Page 111 - 112
// 1
let number11 = 50;
while (number11 <= 100) {
    console.log(number11);
    number11 = number11 + 1;
}

// 2
let number12 = 5;
let sum12 = 0;
while (number12 <= 15) {
    console.log(number12);
    sum12 = sum12 + number12;
    number12++;
}
console.log('Sum: ', sum12);

// 3
let roll = 1;
let rollSum = 0;
while (roll <= 50) {
    console.log(roll);
    rollSum = rollSum + roll;
    roll++;
}
console.log('Sum: ', rollSum);

// 4
let number111 = 21;
let sum111 = 0;
while (number111 <= 50) {
    console.log(number111);
    sum111 = sum111 + number111;
    number111++;
    console.log('Sum: ', sum111);
}

// 5
let numAgain = 20;
let sumAgain = 0;
while (numAgain <= 40) {
    // console.log(numAgain);
    sumAgain = sumAgain + numAgain;
    numAgain++;
}
console.log('Sum: ', sumAgain);

// For Loop 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Sum 11 to 20 
let sumFor = 0;
for (let i = 11; i <= 20; i++) {
    console.log(i);
    sumFor = sumFor + i;
}
console.log('Sum: ', sumFor);



// practice: Page 114 
// 1
for (let i = 150; i <= 170; i++) {
    console.log(i);
}

// 2
let rollSum2 = 0;
for (let i = 31; i <= 58; i++){
    rollSum2 = rollSum2 + i;
}
console.log('Summation of Roll Numbers from 31 to 58 is: ', rollSum2);

// 3
let numSum2 = 0;
for (let i = 25; i <= 75; i++){
    numSum2 = numSum2 + i;
}
console.log('Sum: ', numSum2);



