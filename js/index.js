"use strict"

const main = document.querySelector("main");

function displayDOM(x) {
    const p = document.createElement("p");
    p.innerText = x;
    main.append(p);
}

class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    greet(otherPerson) {
        return `Hello ${otherPerson.name}, I am ${this.name}!`;
    }
}

const sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-3456");
const jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");

displayDOM(jordan.greet(sonny));
displayDOM(sonny.greet(jordan));