function  geeting() {
    console.log('hi');
}

geeting();

function  logFunction(fn) {
    fn();
}

logFunction(geeting);

var fun = function () {
    console.log('Hi function');
}

fun();

logFunction(fun);