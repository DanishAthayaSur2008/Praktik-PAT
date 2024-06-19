class Person {
    constructor(name, age, isHuman) {
        this.name = name;
        this.age = age;
        this.isHuman = isHuman;
    }
}

class Programmer extends Person {
    constructor(name, age) {
        super(name, age, true);
    }

    code() {
        return `${this.name} is coding!`;
    }
}

class Hacker extends Person {
    constructor(name, age) {
        super(name, age, false);
    }

    hack() {
        return `${this.name} is hijacking!`;
    }
}

const myProgrammer = new Programmer('Yusuf', 30);
const myHacker = new Hacker('Danish', 25);

console.log(myProgrammer.code());
console.log(myHacker.hack());
console.log(myProgrammer);
console.log(myHacker);