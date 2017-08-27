function greet(callback){
    console.log('Hello');

    var data = {
        name: ' Thanh Tung'
    };

    callback(data);
}

greet(function(data){
    console.log('The callback was invoked!');
    console.log(data.name);
});

greet(function(data){
    console.log('Ad different callback was invoked!');
    console.log(data.name);
});