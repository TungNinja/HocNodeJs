function Person(fristName, lastName) {

    this.firstName = fristName;
    this.lastName = lastName;

}

Person.prototype.greet = function () {
    console.log('Hello, '+this.firstName+' '+this.lastName);
}

var person = new Person('Thanh', 'Tung');
person.greet();

var person1 = new Person('Thu', 'Ha');
person1.greet();

console.log(person.__proto__);
console.log(person1.__proto__);