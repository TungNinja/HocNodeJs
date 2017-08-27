angular.module('TestApp', []);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc(){
    this.message = 'Hello';

    this.people = [{
        name: 'Thanh Tung',
        age: '22'
    },{
        name: 'Thu ha',
        age: '22'
    }
    ];
}