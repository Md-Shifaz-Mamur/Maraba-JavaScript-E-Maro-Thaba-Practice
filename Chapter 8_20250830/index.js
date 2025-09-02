// Chapter Eight 
// Object

const student = {
    name: 'Md Shifaz Mamur',
    ID: '181541',
    Age: 28,
    Batch: '18',
    firstClass: true
}
console.log(student);

// Practice: Page 126 - 127
// 1
const teacher = {
    Name: 'Shahnewaz Nazimuddin Ahmed',
    Subject: 'Microeconomics I',
    Age: 65,
    Address: 'Tutpara, Khulna',
    Institute: 'Khulna University'
}
console.log(teacher);

// 2
const tree = {
    Name: 'Mango Tree',
    Height: '10 Feet',
    Age: '3 Years',
    Fruit: 'Mango'
}
console.log(tree);

// 3
const animals = {
    Cow: false,
    Cat: false,
    Dog: false,
    Rat: false,
    Human: true,
    Insects: {
        Mosquito: true,
        Fly: false,
        Ant: false,
        Lizard: false
    }
}
console.log(animals);

// 4
const father = {
    Name: 'Md. Abdul Khaleque',
    Occupation: 'Teacher',
    Age: '72',
    Offsprings: 4
}
console.log(father);

// 5
const motorbike = {
    Brand: 'Hero',
    Tiers: 2,
    Color: 'Red',
    Milage: '120 KPH',
    Price: 200000
}
console.log(motorbike);

// 6
const bird = {
    Name: 'Eagle',
    Color: 'Golden',
    Diet: 'Carnivorous',
    LifeSpan: 30
}
console.log(bird);

// 7
const laptop = {
    'Brand Name': 'Dell',
    Processor: "Intel(R) Core(TM) i5-9400H CPU @ 2.50GHz (2.50 GHz)",
    RAM: '16.0 GB (15.8 GB usable)',
    DisplaySize: '12 Inch'
}

// (.) Dot and Bracket Notation 
laptop['Brand Name'] = 'Doel';
laptop.DisplaySize = '13 Inch';

console.log('New Brand Name: ', laptop['Brand Name']);
console.log('New Display: ', laptop.DisplaySize);



// Practice: Page 131 - 132
// 1
const player = {
    Name: 'Tamim Iqbal',
    Age: 40,
    Sports: 'Cricket',
    Team: 'Bangladesh National Team'
}
console.log(player.Team);

// 2
const lapTop = {
    brand: 'Dell',
    processor: "Intel(R) Core(TM) i5-9400H CPU @ 2.50GHz (2.50 GHz)",
    ram: '16.0 GB (15.8 GB usable)',
    screenSize: '12 Inch',
    price: 100000
}
console.log(lapTop.screenSize);

// 3
const favPlace = {
    name: "Cox's Bazar",
    distance: "400 km",
    popularity: "high"
}
console.log(favPlace['popularity']);

// 4
const phone = {
    brand: "Nokia",
    color: "Black",
    price: 5000
}
console.log(phone['price']);

// 5
const library = {
    name: "Public Library",
    location: "Dhaka",
    books: 5000
}
console.log(library.location);

// 6
const movie = {
    title: 'Inception',
    director: 'Nolan',
    rating: 9
}
console.log(movie['rating']);

// 7
const college = {
    name: 'ndc',
    established: '1949',
    groups: ['Science', 'Arts', 'Commerce']
}
console.log(college.groups[1]);

// 8
const family = {
    father: {
        name: "Md Abdul Khaleque",
        age: 72,
        profession: 'teacher'
    },
    mother: {
        name: "Rownaque Zahan Flora",
        age: 65,
        profession: "Home maker"
    }
}
const fatherAge = family.father.age;
const motherAge = family.mother.age;
console.log("Father's age: ", fatherAge);
console.log("mother's age: ", motherAge);
console.log("Summation of parent's ages: ", fatherAge + motherAge);

// // Object.Keys() - Object.values()
console.log(Object.keys(family));
console.log(Object.values(family));

// Property: Prevails or Not 
const profile = {
    name: "Mushfique",
    age: "28",
    city: "Dhaka",
    email: "mushfique@gmail.com"
}
const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes('name');
console.log(hasName);

// Alternative 
// if('je property khujbo' in 'object name'){
//     console.log('property exists');
// } else {
//     console.log('property does not exist');
// }

if ("email" in profile) {
    console.log("Email Exists");
} else {
    console.log("No email, no spam");
}

// Alternative 2: hasOwnProperty
// if(ObjectName.hasOwnProperty("Property that is being searched for")){
//     console.log("exists")
// } else {
//     console.log('does not exist')
// }

// if(profile.hasOwnProperty("email")){
//     console.log("exists 2.............")
// } else {
//     console.log('does not exist');
// }

// Checking VALUE of the property (key)
// if(ObjectName.PropertyName==="Value"){
//     console.log("True");
// } else {
//     console.log("False");
// }

if (profile.city === "Dhaka") {
    console.log("Jam er shohor Dhaka");
} else {
    console.log("Aram er graam");
}


// entries: key and value will make an array in pairs
// Object.entries(objectName)

console.log(Object.entries(profile));

// This is called arrays of array or
// Two-dimensional array 

/* Running Loop on Object */
// for ... in Loop 

const profile1 = {
    name: "shifaz",
    age: 28,
    city: "Dhaka"
}
for (const key1 in profile1) {
    const value1 = profile1[key1];
    console.log(key1, value1);
}

// Alternative
// const profile = {
//     name:"Shifaz",
//     age:28,
//     city: "Dhaka"
// };
// const keys = Object.keys(profile);
// for(const key of keys){
//     console.log(key, profile[key]);
// }


// Practice: Page 137
// 1
const book = {
    name: "Marhaba - JavaScript E Maro Thaba",
    author: "Jhankar Mahbub",
    price: 780
};
console.log(Object.keys(book));
console.log(Object.values(book));

// 2
const article = {
    title: "Learning JS",
    category: "Programming"
}
if (article.hasOwnProperty("author")) {
    console.log("article property exists");
} else {
    console.log("article property does not exist");
}

// 3
const laptopNew = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
};
for (const keyLapNew in laptopNew) {
    const valueLapNew = laptopNew[keyLapNew];
    console.log(keyLapNew, valueLapNew);
}

// 4
const phoneNew = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
};
const keysArray = Object.keys(phoneNew);
for (const allSingleKey of keysArray) {
    console.log(allSingleKey, phoneNew[allSingleKey]);
}


// 5
const bike = {
    brand:"Hero",
    price: 120000,
    model: "Splendor"
}
console.log(Object.values(bike));

// 6
const books ={
    book1:"Harry Potter",
    book2:"The Hobbit",
    book3:"Game of Thrones"
}
const booksValues = Object.values(books);
for(const booksValuesSeparated of booksValues){
    console.log(booksValuesSeparated);
}

// 7
const 
