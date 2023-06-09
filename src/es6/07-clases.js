class User {
    constructor(name, age) {
        console.log('New User');
        this.name = name;
        this.age = age;
    }

    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()}, I am ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const newUser = new User('Javier', 18);

console.log(newUser.greeting());
console.log(newUser.uAge);
console.log(newUser.uAge = 20);
