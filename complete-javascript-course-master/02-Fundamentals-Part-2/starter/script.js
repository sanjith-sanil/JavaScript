// DAY 5:

/*
function logger() {
    console.log('My name is Sanjith');
}
// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//console.log(fruitProcessor(5, 0));

const orangeJuice = fruitProcessor(0, 3);
console.log(orangeJuice);


// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function declaration(alternate)
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1991, 'Bob'));


// DAY 6: Re-doing D5

// DAY 7:

// function cutPieces(fruit) {
//     return fruit * 4;
// }

const cutPieces = function(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges);
    
    return `Juice with ${applePieces} A.Pieces & ${orangesPieces} Or.Pieces ${apples} apples and ${oranges} oranges.`;
}

console.log(fruitProcessor(2, 3));
// const juice = fruitProcessor(2, 3);
// console.log(juice);


CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(1, 2, 3));


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) 
{
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >=2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...')
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//ARRAYS
/*
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
//Array is primitive, so even const value can be changed(but not whole array)
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);
*/

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

// Adding
//friends.push('Jay'); adding element in end
const newLength = friends.push('Jay');
console.log(friends);

console.log(newLength);

friends.unshift('John'); //adding element in beginning
console.log(friends);

// Removing
friends.pop(); //Last (Jay)
//friends.pop(); //Last (Peter)

const popped = friends.pop();
console.log(popped); //shows which one deleted
console.log(friends);

friends.shift(); //deleting at the start
console.log(friends);





