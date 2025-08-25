// Chapter 5 
// if (condition) 
// If-Else 

if (9 < 10) {
    console.log("I am small. I don't bite.");
}

const biryaniPrice = 500;
if (biryaniPrice < 600) {
    console.log("Mama, may I have some biryani?");
}

// If-Else 
// if(condition){
//     // execute code if the condition is true 
// } else{
//     // execute code if the condition is false 
// }


const rainingOutside = true;
if (rainingOutside == false) {
    console.log("I will carry my umbrella with me.")

} else {
    console.log("I will not carry my umbrella.")
}


const weight = 10;
if (weight > 20) {
    console.log("mama, get on the rickshaw.")
} else {
    console.log("mama, hete chol.");
}

// Practice - Page 77
// 1
const basayFera = 5;
if (basayFera < 6) {
    console.log("Baba, ei ne, pizza kha....")
} else {
    console.log("Aj tui aay basay, jharur bari ready ache.");
}

// 2
const loginApp = false;
if (loginApp == true) {
    console.log("Welcome")
} else {
    console.log("Get Lost!");
}

// 3
const runFiveKm = true;
if (runFiveKm == true) {
    console.log("Get Chocholates!")
} else {
    console.log("Bigger Tummy!!!!");
}

// 4
const mathScore = 85;
if (mathScore > 80) {
    console.log("Gets a brand new Bike!");
} else {
    console.log("Deprived of getting a bike!");
}


// 5
const movie = 8;
if (movie < 9) {
    console.log("Watch movie");
} else {
    console.log("Sleep at home...zzzzzzzzz...");
}

// 6
const temperature = 35;
if (temperature >= 30) {
    console.log("AC On!");
} else {
    console.log("Ghum with kombol..zzzzzzzzzz...");
}

// Practice: Page 80
// 1
const age = 19;
const height = 61;
if (age > 18 && height > 60) {
    console.log("Pushes the car!")
} else {
    console.log("Inside the car.")
}

// 2
const studentMathScore = 78;
const studentEngScore = 90;
if (studentMathScore > 80 || studentEngScore > 85) {
    console.log("Eligible!");
} else {
    console.log("Toke biye diye debo!");
}

// 3
const gpa = 5.00;
const income = 9500;
if (gpa == 5.00 && income < 10000) {
    console.log("Gets Scholarship!");
} else {
    console.log("Pays Tuition Fee!");
}

// 4
const candidateAge = 25;
const experience = 4;
if (candidateAge < 30 && experience > 2) {
    console.log("Eligible for the exam!");
} else {
    console.log("Disqualified!");
}

// 5
const dim = 20;
const murgi = true;
if (dim > 12 || murgi == false) {
    console.log("Dim er korma ranna korbo!");
} else {
    console.log("পাউরুটি আর কলা খাবো!");
}

// 6
const bodyTemperature = 100;
const cough = true;
if (bodyTemperature > 100 || cough == true) {
    console.log("Consults a doctor!!!");
} else {
    console.log("Katha muri diye shuye thakbe!");
}

// 7
const attendance = 100;
const homeWork = true;
if (attendance > 80 && homeWork == true) {
    console.log("Porikkha dite deya hobe!");
} else {
    console.log("Auto Fail!");
}

// 8
const electricity = false;
const mobileCharge = false;
if (electricity == false && mobileCharge == false) {
    console.log("Porte Bosbo");
} else {
    console.log("Video game khelbo!");
}

// 9
const shirtPrice = 1100;
const coupon = false;
if (shirtPrice > 1000 && coupon == true) {
    console.log("20% Discount!");
} else {
    console.log("No Discount!");
}

// Else-If 
// Practice: Page 83 - 34 
// 1
const price = 3000;
if (price > 3000) {
    const discount = price / 100 * 5;
    const paidAfterDiscount = price - discount;
    console.log(paidAfterDiscount);
} else if (price > 6000) {
    const discount = price / 100 * 15;
    const paidAfterDiscount = price - discount;
    console.log(paidAfterDiscount);
} else {
    console.log(price);
}

// 2
const customerAge = 61;
const restaurantBill = 400;
if (customerAge < 12) {
    const discount = restaurantBill / 100 * 100;
    const restBillAfterDiscount = restaurantBill - discount;
    console.log(restBillAfterDiscount);
} else if (customerAge > 60) {
    const discount = restaurantBill / 100 * 50;
    const restBillAfterDiscount = restaurantBill - discount;
    console.log(restBillAfterDiscount);
} else {
    console.log(restaurantBill);
}

// 3
const accBalance = 7500;
if (accBalance < 1000) {
    console.log("Deposit Kor!");
} else if (accBalance >= 1000 && accBalance <= 5000) {
    console.log("Bindas Life Enjoy Kor!!!");
} else if (accBalance > 5000) {
    console.log("Tui dhoni, amake biya kor!");
}

// 4
const studentsMarks = 81;
if (studentsMarks < 50) {
    console.log("Fail");
} else if (studentsMarks >= 50 && studentsMarks <= 80) {
    console.log("Pass");
} else if (studentsMarks > 80) {
    console.log("A+");
}

// 5
const bookPageNumbers = 501;
if (bookPageNumbers < 100) {
    console.log("Small Book");
} else if (bookPageNumbers >= 100 && bookPageNumbers <= 500) {
    console.log("Mid-size book");
} else if (bookPageNumbers > 500) {
    console.log("Heart Attack Size Book!");
}

// 6
const waterTemperature = 22;
if(waterTemperature<0){
    console.log("Ice");
} else if (waterTemperature>=0 && waterTemperature<=20){
    console.log("Cool Cool");
} else if (waterTemperature>20){
    console.log("Hot Hot!!!");
}

// 7
const playerLevel = 56;
if(playerLevel<10){
    console.log("Novice")
} else if (playerLevel>=10 && playerLevel<=50){
    console.log("Expert");
} else if (playerLevel>50){
    console.log("Pro Gamer!!!");
}
