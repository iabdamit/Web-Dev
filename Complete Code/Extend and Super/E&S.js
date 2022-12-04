class Pet {
    constructor(name, age) {
        console.log('IN PET CONSTRUCTOR')
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('IN CAT CONSTRUCTOR')
        super(name, age);//use parent class property of this.name,this.age
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWW!!';
    }
}

class Dog extends Pet {
    bark() {
        return 'woof!!';
    }
}
const tommy = new Cat('tommy', 6);