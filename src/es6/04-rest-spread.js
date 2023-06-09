//Array Destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

//Object Destructuring
let user = { username: 'Javier', age: 18 }
let {username, age} = user;
console.log(username, age);

//Spread Operator
let person = { name: 'Javier', age: 18 };
let country = 'Canada';

let data = { ...person, country };
console.log(data);

//Rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4, 5);
