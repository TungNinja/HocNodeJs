// Object properties and methods
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

// function and arrrays

var arr = [];
arr.push(function () {
    console.log('Element 1');
});

arr.push(function () {
    console.log('Element 2');
});

arr.push(function () {
    console.log('Element 3');
});

arr.forEach(function (item) {
    item();
});