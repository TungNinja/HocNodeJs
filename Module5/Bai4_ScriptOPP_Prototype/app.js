var person =  {
    firstName: '',
    lastName: '',
    greet: function () {
        return this.firstName+ ' '+this.lastName;
    }
}

var john = Object.create(person);
john.firstName = 'Thanh';
john.lastName = 'Tung';

var jane = Object.create(person);
jane.firstName = 'Thu';
jane.lastName = 'Ha';

console.log(john.greet());
console.log(jane.greet());