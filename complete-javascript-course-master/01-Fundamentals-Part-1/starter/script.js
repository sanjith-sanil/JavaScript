/*
alert("Hello World"); // For pop-up


let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = "Jonas";
let PI = 3.1415;

// Variable name convention
let jonas_matilda = "JM";
let $function = 27;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';


const now = 2023;
const ageJonas = now - 2001;
const ageSarah = now - 2006;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Mann';
console.log(firstName +' '+ lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2023;
const ageJonas = now - 2001;
const ageSarah = now - 2006;

console.log(now - 2001 > now - 2006);

let x,y;
x = y = 25 -10 -5; // x = y = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// DAY 2:

//Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

console.log(massMark);
console.log(heightMark);
console.log(massJohn);
console.log(heightJohn);

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const BMIMark1 = massMark / (heightMark * heightMark);
const BMIJohn1 = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, BMIMark1, BMIJohn1, markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ',' + " a " + (year - birthYear) + " years old " + job + '!';

const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`

console.log(jonas);
console.log(jonasNew);

console.log(`I'm a cool person`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`)


const age = 19;

if (age >= 18) {
    console.log('Sarah can start driving license')
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years `)
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// DAY 3:

//Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn)

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    (BMIJohn > BMIMark)
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)ring function
}

//type conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

// Trying if Number function converts string into number - No
console.log(Number('Jonas'));

// Here its Just number
console.log(11);
// Coverts number into string
console.log(String(11));

// type coercion
console.log('I am ' + 23 + ' years old');
  //IMP: Strings added to numbers in addition, is always a string
console.log('23' + '10' + '3'); 
console.log('23' + 10 + '3');
console.log(Number(1+2+3) + '4');
console.log(1 + 2 + 3 + '4');

console.log('23' - '10' - '3');
console.log('23' - 10 - '3');

console.log('33' * '3');
console.log('33' * 3);

console.log('10' / '3');
console.log('10' / 3);


let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

console.log(Number(2+3+4) + '5');
console.log(2 + 3 + 4 + '5');


// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));

console.log(Boolean('Jonas'));
console.log(Boolean({}));


const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height = 0; // Even if its Zero, its undefined (falsy values)
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}


// const age = 18;
// if (age === 18) {
//     console.log('You just became an adult 1');
// }

// if (age == 18) {
//     console.log('You just became an adult 2');
// }

// '1' == 1 (True)
// '1' === 1 (False) (Better to always use === than ==)

const age = '18';
if (age === 18) {
    console.log('You just became an adult 1');
}

if (age == 18) {
    console.log('You just became an adult 2');
}


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number!')
} else if (favourite === 9) {
    console.log('9 is also a cool number!')    
} else {
    console.log('Number is not 23 or 7 or 9')
}

if(favourite !== 23) console.log('Why not 23?');


// DAY 4:
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive..');
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive..');
}


CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins,scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// } else {
//     console.log('Koalas win the trophy');
// }
//---------------------------------------------
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins,scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// }
//---------------------------------------------

// Bonus 1:
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins,scoreKoalas);


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No winner!')
}


const day = 'monday';

switch(day) {
    case 'monday':
    console.log('Enjoy Monday!!')
        break
    case 'tuesday': 
    console.log('Enjoy Tuesday!!')
        break
    case 'wednesday': 
    console.log('Enjoy Wednesday!!')
        break
    case 'thursday': 
    console.log('Enjoy Thursday!!')
        break
    case 'friday': 
    console.log('Enjoy Friday!!')
        break
    case 'saturday': 
    case 'sunday': 
    console.log('Enjoy the Weekend!!')
        break
    default:
        console.log('Invalid Day')    
}


const day = 'monday';

if (day === 'monday') {
    console.log('Enjoy Monday!!');
} else if (day === 'tuesday') {
    console.log('Enjoy Tuesday!!');
} else if (day === 'wednesday') {
    console.log('Enjoy Wednesday!!');
} else if (day === 'thursday') {
    console.log('Enjoy Thursday!!');
} else if (day === 'friday') {
    console.log('Enjoy Friday!!');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the Weekend!!');
} else {
    console.log('Invalid day!!');
}

// const age = 22;
// age >= 18 ? console.log('I like to drink wine') :
// console.log('I like to drink water')

// const age = 22;
// let drink;
// if (age >= 18) {
//     drink = 'I like to drink wine';
// } else {
//     drink = 'I Like to drink water';
// }
// console.log(drink)

// const age   = 22;
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(`I like to drink ${(age >= 18) ? 'wine' : 'water'}`);

CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
)

const bill = 275;
let tip;

if (bill >= 50 && bill <= 300) {
    tip = 0.15 * bill;
} else {
    tip = 0.20 * bill;
}    
console.log(`The Bill:${bill}, Tip:${tip}, Tip+Bill:${tip + bill}`);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);

*/