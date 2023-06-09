function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Javi', 'Álvaro', 'Dani', 'Shin']);
console.log(it.next().value);
