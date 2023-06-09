const user = { username: 'Javi1621', age: 18, country: 'Canada' };
const { username, ...values } = user;

console.log(user);
console.log(username);
console.log(values);
