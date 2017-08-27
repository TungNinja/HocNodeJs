(function (exports, require, module, __filename, __dirname) {
    var greet = function () {
        console.log('Hello');
    }

    module.exports = greet;
});

fn(module.exports, require, module, filename, dirname);

return module.exports;