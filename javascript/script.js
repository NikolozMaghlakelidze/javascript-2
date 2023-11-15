// console.log("hello world");

// 1

for (let i = 5; i <= 100; i++) {
    console.log(i);
}

// 2 
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
        console.log(array1[i]);
    }
}
 
// 3  
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 5) {
        console.log('არის');
        break;
    }
}


// 4 
let array3= [1, 2, 3, 4, 5];
let sum = 0;

for(let i=0; i<array3.length; i++){
    sum += array3[i];
}

console.log(sum); 


// 5
let array4 = [1, 2, 3, 7, 6, 9];
let sum1 = 0;
for(let i=0; i<array4.length; i++){
    sum1 += array4[i];
}
console.log(sum1 / array4.length);

// 6 

let array5 = [1, 2, 3, 7, 6, 9];
for (let i = 0; i < array5.length; i++) {
 if (array5[i] === 7) {
    continue;
}
    console.log(array5[i]);
}


// 7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
console.log(user.studentstatus);
  
//   8 
let user1 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

if (user1.age > 18 && user1.studentstatus == 'active') {
    console.log('hello');
}
if (user1.name == 'levani') {
    console.log('hello levani');
}
if (user1.studentstatus == 'active' || user1.age < 25) {
    console.log('hello world');
}
else {
    console.log("error")
}
// 9 
let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];

for(let i = 0; i < array.length; i++) {
 for(let a = 0; a < array[i].length; a++) {
 if(array[i][a] > 0) {
  console.log(array[i][a]);
 }
 }
}


// 10 
let numbers = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

let odd_numbers = numbers.filter(num => num % 2 == 0);
console.log(odd_numbers);


// console.log(evenNumber);
let evenNumbers = numbers.filter(num => num % 2 !==  0);
console.log(evenNumbers);

// 11 
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

let userWithStatusTrue = users.find(user => user.status === true);

console.log(userWithStatusTrue);
