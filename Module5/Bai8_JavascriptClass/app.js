'use strict';

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){
        console.log('Hello, '+this.firstName+ ' '+this.lastName);
    }
}

var joihn =  new Person('Thanh', 'Tung');
joihn.greet();
