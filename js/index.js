"use strict"

const main = document.querySelector("main");

function displayDOM(x, y) {
    const p = document.createElement("p");
    p.innerHTML = x;
    main.append(p);
}

class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.friends = [];
    }

    greet(otherPerson) {
        return `Hello ${otherPerson.name}, I am ${this.name}!`;
    }
    drive(car) {
        return `${this.name} drives a ${car.print_info(car)}`;
    }
    print_contact_info() {
        return `${this.name}'s email: ${this.email}
        <br>${this.name}'s phone number: ${this.phone}`;
    }
    add_friend(friend){
        this.friends.push(friend);
    }
    num_friends(){
        displayDOM(`${this.name} Number of Friends:`);
        return this.friends.length;
    }
    list_friends(){
        displayDOM(`${this.name} Friend List:`);
        this.friends.map(function(x){
            console.log(x.name)
            displayDOM(x.name);
        })
    }
}
const sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4984");
const jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");
const bob = new Person("Bob");

displayDOM(jordan.greet(sonny));
displayDOM(sonny.greet(jordan));

////////////////////////////////////
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    print_info(car){
        return `${this.year} ${this.make} ${this.model} `
    }
}
const car1 = new Vehicle("Volvo", "240", "1992");
const car2 = new Vehicle("BMW", "330i", "2004");

displayDOM(car1.print_info());
displayDOM(jordan.drive(car2));
displayDOM(sonny.drive(car1));
displayDOM(sonny.print_contact_info());
// jordan.friends.push(sonny);
// sonny.friends.push(jordan);
jordan.add_friend(sonny);
sonny.add_friend(jordan);
jordan.add_friend(bob);
displayDOM(sonny.friends[0].name);
displayDOM(jordan.num_friends());
jordan.list_friends();