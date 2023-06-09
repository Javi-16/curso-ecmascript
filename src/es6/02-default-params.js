function newUser(name, age, country) {
    var name = name || 'Javier';
    var age = age || 18;
    var country = country || 'Canada';
    console.log(name, age, country);
}

newUser();
newUser('Álvaro', 13, 'Colombia');

function newAdmin(name = 'Javier', age = 18, country = 'Canada') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Álvaro', 13, 'Colombia');
