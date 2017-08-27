var obj = {
    name: 'Thanh Tung',
    greet: function (param) {
        console.log(`Hello ${this.name}`);
    }
}


obj.greet(); // Cach goi khong co tham so

// Cach goi co tham so
obj.greet().call({name: 'Thanh Tung'}, param1,param2);
// Cach goi them apply
obj.greet().apply({name: 'Thanh Tung'}, [param1, param2]);