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

laptop['Brand Name']='Doel';
laptop.DisplaySize = '13 Inch';

console.log('New Brand Name: ', laptop['Brand Name']);
console.log('New Display: ', laptop.DisplaySize);



// (.) Dot and Bracket Notation 
