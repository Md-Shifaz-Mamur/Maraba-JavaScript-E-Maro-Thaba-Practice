// Chapter 6
// Array 

const numbers = [12, 34, 141, 43];

// Practice: Page 93 
// 1
const array1 = [71, 72, 73, 74, 75, 76, 77, 78, 79];

// 2
const fruits = ['apple', 'banana', 'orange', 'mango', 'guava'];

// 3
const vegetables = ['potato', 'onion', 'brinjal', 'radish', 'carrot', 'tomato', 'okra', 'gourd', 'cucumber', 'pointed gourd']

// 4
const movies = ['movie 1', 'movie 2', 'movie 3', 'movie 4', 'movie 5',]

// 5
const odds = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];

// 6
const color = ['black', 'yellow', 'white', 'blue', 'orange', 'green'];
console.log(color.length);
const third = color[3];
console.log(third);

// 7
const capitalCities = ['Dhaka', 'New Delhi', 'Doha', 'Islamabad', 'Cairo'];
console.log(capitalCities[3]);
console.log(capitalCities.length);

// Index = Position inside array 

// Practice
// Page: 96

// 1
const friends = ['sahnto', 'panto', 'ranto', 'jyanto', 'onto'];
console.log(friends[3]);

// 2
const favBooks = ['book 1', 'book 2', 'book 3', 'book 4', 'book 5', 'book 6', 'book 7',];
console.log(favBooks[5]);

// 3
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numberArray[7] = 30;
console.log(numberArray);

// 4
const games = ['free fire', 'pub-g', 'candy crush', 'temple run'];
games[2] = 'subway surfer';
console.log(games);

// 5
const family = ['abbu', 'ammu', 'ezaz', 'akhi', 'niaz', 'shifaz'];
console.log(family[3]);

// 6
const countriesToTravel = ['KSA', 'UAE', 'USA', 'Turkiye', 'UK', 'Qatar', 'Palestine'];
console.log(countriesToTravel);
console.log(countriesToTravel[4]);
console.log(countriesToTravel.length);

// 7
const table = ['laptop', 'desktop', 'printer', 'book'];
console.log(table[7]);



// Push
const numArray = [1, 2, 3, 5, 7];
numArray.push(12, 34, 56, 67);
console.log(numArray);

// pop Remove the last item
numArray.pop();
console.log(numArray);

// Shift - Remove first item
numArray.shift();
console.log(numArray);


// Practice 
// Page: 99 - 100
// 1
const numbersArray = [10, 20, 30, 40, 50];
numbersArray.push(60);
console.log(numbersArray);

// 2
const myFrnds = ['sajib', 'sagar', 'sakib', 'sohel'];
myFrnds.push('sumon');
console.log(myFrnds);

// 3
const installedGames = ['g1', 'g2', 'g3', 'g4'];
console.log(installedGames);
installedGames.pop();
console.log(installedGames); //'g4' - last item removed

// 4
const arrayFour = [24, 36, 48, 60];
console.log(arrayFour);
arrayFour.unshift(12);
console.log(arrayFour);

// 5
const bookArray = ['b1', 'b2', 'b3', 'b4', 'b5'];
console.log(bookArray);
bookArray.shift('b1');
console.log(bookArray);


// Include : whether the elements exists or not

// const includePractice = [1, 2 , 3, 4 , 6]
// const exist = includePractice.includes(5);
// console.log(exist);

// indexOf = included element er index value 
// const includePracticeIndex = [1, 2, 3, 4, 6]
// const existIndex = includePractice.indexOf(6);
// console.log(existIndex);


// Practice 
// 1
const fruitsOfToday = ['apple', 'banana', 'mango', 'lychee'];
const mangoExist = fruitsOfToday.includes('mango');
console.log(mangoExist);
if (mangoExist==true){
    console.log('mango acche');
} else {
    console.log('mango nai, gaache oth!');
}

// 2
const nameArray = ['Babul', 'Alif', 'Chhoton'];
const indexBabul = nameArray.indexOf('Babul');
console.log(indexBabul);

// 3
const myFriendsArray = ['Rimon', 'Rifat', 'Rajib'];
console.log(myFriendsArray.indexOf('Rifat'));

// 4
const city = ['Dhaka', 'Chittagong', 'Sylhet'];
city.push('rajshahi');
console.log(city);
console.log(city.includes('Rajshahi'));

// 5
const natureArray = ['Lake', 'Cloud', 'Rain', 'Monsoon'];
const existRain = natureArray.includes('Rain');
if (existRain==true){
    console.log('I need an umbrella');
} else {
    console.log('No rain no pain');
}

// 6 
const outdoorGames = ['football', 'cricket', 'volleyball'];
const existBadminton = outdoorGames.includes('Badminton');
console.log(existBadminton);
