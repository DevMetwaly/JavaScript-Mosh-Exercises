
/*
***********************************
**********3- operators*************
*********************************** 
*/

// 12- Exercise1
/* let color1 = 'red';
let color2 = 'blue';

let temp = color1;
color1 = color2;
color2 = temp;

console.log(color1);
console.log(color1); */




/*
***********************************
********4- control flow************
*********************************** 
*/

//11- Exercise1
/* function isLandScape(width,height){
    return (width>height);
}
 */


//12- Exercise2
/* try{
    const output = fizzBuzz(3);
    console.log(output);
}
catch(e){
    console.log(e.message);
}
function fizzBuzz(number){
    if(typeof number != "number") throw new Error("Not A Numebr");
    if(!(number%3)) return "Fizz";
    if(!(number%5)) return "Buzz";
    if(!(number%3) && !(number%5)) return "FizzBuzz";
    return number;    
} */


//13- Exercise3
/* const output = checkSpeed(125);
console.log(output);
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < (speedLimit+kmPerPoint)) return "OK";
    const points = Math.floor( (speed-speedLimit)/kmPerPoint );
    return (points>=12)? "License Suspended":points;
}
*/


//14- Exercise4

/*  showNumber(10)

function showNumber(limit){
for(let i=0;i<=limit;i++)
    if(i%2) console.log(i,"Odd");
    else console.log(i,"Even");

}
*/


//15- Exercise5
/* console.log(countTruthy([1,'false',NaN]));
function countTruthy(array){
    return array.reduce(function(cnt,curr){
        if(curr) cnt+=1;
        return cnt;
    },0);
} */


//16- Exercise6
/* let movie = {
    title:'Game Night',
    author: 'Nicolas',
    rate: 4.5,
    actors: ['Jhon','Smith']
};
showProperties(movie);

function showProperties(obj){
    for(let key in obj)
        if(typeof obj[key] == "string") console.log(`${key}: ${obj[key]}`);
} */


//17- Exercise7
/* console.log(sum(10));
function sum(limit){
    let sum = 0;
    for(let i=0;i<=limit;i++)
        if(!(i%3) || !(i%5)) sum += i; 
    return sum;
}*/


//18- Exercise8
/* console.log(calculateGrade([80,80,50]));
function calculateGrade(grades){
    const avg = grades.reduce((sum,curr) => sum+curr) / grades.length;
    if(avg<60) return "F";
    if(avg<70) return "D";
    if(avg<80) return "C";
    if(avg<90) return "B";
    if(avg<100) return "A";

} */


//19- Exercise9
/* showStars(5);
function showStars(limit){
    let star = "*";
    for(let i=0;i<limit;i++) console.log(star),star+='*';
} */


//20- Exercise10

/* showPrimes(20);
function isPrime(number){
    for(let i=2;i<=Math.sqrt(number);i++)
        if(!(number%i)) return false;
    return true;
}
function showPrimes(limit){
    for(let i=2;i<limit;i++)
        if(isPrime(i)) console.log(i);
} */




/*
***********************************
***********5- Objects**************
*********************************** 
*/
//15- Exercise1
/* let address={
    street: '59 Riad Basha',
    city: 'Tanta',
    zipCode: '31513'
};
showAddress(address);
function showAddress(address){
    for(let key in address) console.log(`${key}: ${address[key]}`);
}
 */


 
//16- Exercise2
/* 
function createAddress(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    };
}
function Address(street,city,zipCode){
    this.street= street;
    this.city   = city;
    this.zipCode= zipCode;
} */

//17- Exercise3
/* let address1 = new Address('59 riad basha','tanta',13571);
let address2 = new Address('59 riad basha','tanta',13571);
let address3 = address1;

function Address(street,city,zipCode){
    this.street= street;
    this.city   = city;
    this.zipCode= zipCode;
}
function areSame(address1,address2){
    return address1===address2;
}
function areEqual(address1,address2){
    for(let key in address1)
        if(address1[key] != address2[key]) return false;
    return true;
} */


//18- Exercise4
/* let post = {
    title:'Learn JS',
    description:'JavaScript is a programming language ...',
    body: '',
    author:'Ahmed',
    views: 0,
    comments:[
        {author:'Mohamed',body:'very usefull'},
        {author:'Abdo',body:'Greate Job'}
    ],
    isLive: false
};
 */
//19- Exercise5
/* function Post(title,description,body,author){
    this.title      = title;
    this.description= description;
    this.body       = body;
    this.author     = author;
    this.views      = 0;
    this.comments   = [];
    this.isLive     = false;
}
let post1 = new Post('Learn JS',
                    'JavaScript is a programming language ...',
                    '',
                    'Ahmed');
 */

//20- Exercise6
/* let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson:0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson:11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson:21, maxPerPerson: 30}
];
*/









/*
***********************************
***********6- Arrays***************
*********************************** 
*/
//17- Exercise1
/* const arr = arrayFromRange(1,10);
console.log(arr);
function arrayFromRange(min, max){
    const output = [];
    for(let i=min;i<=max;i++) output.push(i);
    return output;
}
 */



//18- Exercise2
/* const numbers = [1,2,3,4];
const searchElement = 3;
console.log(includes(numbers,searchElement));
function includes(numbers,searchElement){
    for(let number of numbers)
        if(number === searchElement) return true;
    return false;
} */




//19- Exercise3
/* const numbers = [1,2,3,4,1,1];
console.log(except(numbers,[1,2]));
function except(numbers,exclude){
    const output=[];
    for(let num of numbers)
        if(!exclude.includes(num))
            output.push(num);
    return output;
}
 */



//20- Exercise4
/* try{
const numbers = [1,2,3,4,5];
console.log(move(numbers,1,-1));

}
catch(e){
    console.log(e.message);
}

function move(array,index,offset){
    const output = [...array];
    if(index>=output.length || index<0) 
        throw new Error("Invalid Index");
    
    const position = index+offset;
    if(position<0 || position>=output.length)
        throw new Error("Invalid shifting");

    const shiftElement = output.splice(index,1);
    output.splice(position,0,shiftElement[0]);
    
    return output;
}
 */


//21- Exercise5
/* const numbers = [1,2,3,4,1,1];
console.log(countOccurrences(numbers,1));

function countOccurrences(array,searchElement){
    return array.reduce((occurace,currentElement) => occurace += Number(currentElement===searchElement),0);
}
 */


//22- Exercise6
/* const numbers = [1,2,3,4,1,1];
console.log(getMax(numbers));

function getMax(numbers){
    return numbers.reduce((maxElement,currElement) => currElement>maxElement?currElement:maxElement);
} */



//23- Exercise7
/* const movies =[
    {title:'a', year: 2018, rating: 4.5},
    {title:'b', year: 2018, rating: 4.7},
    {title:'c', year: 2018, rating: 3},
    {title:'d', year: 2017, rating: 4.5}
];
//All the movies in 2018 with rating > 4
//Sort them by their rating
//Descending order
//Pick their title
const titles = movies
    .filter((movie) => movie.year === 2018 && movie.rating >= 4)
    .sort((element1,element2) => element1.rating - element2.rating)
    .reverse()
    .map(movie => movie.title);
console.log(titles);  */









/*
***********************************
***********6- Arrays***************
*********************************** 
*/

//12- Exercise1
/* console.log(sum([1,2,3,4]));
function sum(...items){
    if(items.length === 1  && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((accumulated,currElement)=>accumulated+currElement);
} */



//13- Exercise2
/* const circle1 = circle(1);
console.log(circle1.area);

function circle(radius){
    return {
        radius,
        get area(){
            return Math.PI * this.radius * this.radius;
        }
    };
}
 */


//14- Exercise3
/* try{
const numbers = {};
console.log(countOccurrences(numbers,1));
}
catch(e){
    console.log(e.message);
}
function countOccurrences(array,searchElement){
    if(!Array.isArray(array)) throw new Error("Invalid array");
    return array.reduce((occurace,currentElement) => occurace += Number(currentElement===searchElement),0);
}
 */