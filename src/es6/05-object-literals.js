//Enhanced object literals
function newUser(user, age, country, uId) {
    return {
        user, //user: user,
        age, //age: age,
        country, //country: country
        id: uId
    }
}

const user = newUser('Javi', 18, 'Canada', 1099735789);
console.log(user);
