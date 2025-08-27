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
if (waterTemperature < 0) {
    console.log("Ice");
} else if (waterTemperature >= 0 && waterTemperature <= 20) {
    console.log("Cool Cool");
} else if (waterTemperature > 20) {
    console.log("Hot Hot!!!");
}

// 7
const playerLevel = 56;
if (playerLevel < 10) {
    console.log("Novice")
} else if (playerLevel >= 10 && playerLevel <= 50) {
    console.log("Expert");
} else if (playerLevel > 50) {
    console.log("Pro Gamer!!!");
}


// Nested if-else 
const moneyInHand = 400;
const popCornPrice = 40;
if (moneyInHand > 300) {
    console.log("Tui cinema dekhte jabi!");
    if (popCornPrice <= 50) {
        console.log("Popcorn Kinbi");
    } else {
        console.log("Popcorn is expensive");
    }

} else {
    console.log("Basay bose thakbi!");
}


// Practice: Page 86 
// 1
const friendInvite = true;
const moneyinPocket = 1500;
if (friendInvite == true) {
    console.log("Attend birthday party!");

    if (moneyinPocket > 1000) {
        console.log("Buy a gift for friend!");
    } else {
        console.log("Attend party empty handed!");
    }

} else {
    console.log("Exclude from the friend list!");
}

// 2
const guest = true;
const drinkTea = true;
if (guest == true) {
    console.log("Do u want to have a cup of tea?");

    if (drinkTea == true) {
        console.log("sathe biscuit khaben?");
    } else {
        console.log("Ok, sudhu chaa ready!")
    }

} else {
    console.log("Watch Star Jalsa on TV!");
}

// 3
const accActivated = false;
const premiumAccount = false;
if (accActivated == true) {
    console.log("Check subscription!");

    if (premiumAccount == true) {
        console.log("Show Premium Features!");
    } else {
        console.log("Watch free version!");
    }

} else {
    console.log("Account is not activated!");
}

// 4
const foodInFridge = false;
const foodDeliveryApp = false;
if (foodInFridge == true) {
    console.log("Khabar gorom korbi!");

} else if (foodDeliveryApp == true) {
    console.log("Order Food");
} else {
    console.log("Ami Ajke roja");
}


// 5
const partyGuests = 99;
const bringGift = false;
if (partyGuests > 100) {
    console.log("Check whether all bring gifts along with them");
    if (bringGift == true) {
        console.log("Let's party all night");
    } else {
        console.log("I will party with myself!");
    }

} else {
    console.log("No Party At All");
}

// Ternary Operator 
const age12 = 34;
// if(age12>=18){
//     console.log("Vote now");
// } else {
//     console.log("You are not eligible to vote");
// }

console.log(age12 >= 18 ? "Eligible" : "Not eligible");


let prodPrice = 500;
let isLeader = true;
// if (isLeader===true){
//     prodPrice = 0;
//     console.log("E leader aise, taka nis na!")
// } else {
//     prodPrice = prodPrice+100;
//     console.log(prodPrice);
// }

// prodPrice=isLeader===true?0:prodPrice+100;

// Assign Value:
// variable = condition ? valueIfTrue : valueIfFalse;
// Log
// console.log(condition ? valueIfTrue : valueIfFalse);

console.log(isLeader === true ? "E leader aise, taka nis na" : prodPrice + 100);

// Practice: Page 90
// 1
// Ternary

const customerBuyingPrice = 4000;
const cashback = 500;
console.log(customerBuyingPrice > 3000 ? cashback + " " + "Taka Cashback" : "No Cashback");

// if(customerBuyingPrice>3000){
//     console.log(cashback);
// } else {
//     console.log("No cashback");
// }


// 2
let yourAge = 14;
console.log(yourAge < 15 ? "Child" : (yourAge >= 15 && yourAge <= 19 ? "Teenager" : "Buira Beta"));

// 3
let isLoggedIn = true;
console.log(isLoggedIn == true ? "Welcome back" : "Please login");

// 4
let tankIsFull = true;
console.log(tankIsFull == true ? "Ready for a long drive" : "Fill the tank");

// 5
let passInExam = false;
console.log(passInExam === true ? "Party time" : "Next semester e serious study korbo");

// 6
let sunny = false;
console.log(sunny === false ? "Stay Home" : "Let's Play");

// 7
let expensive = false;
console.log(expensive==false? "I will buy this item!" : "Not gonna buy!");