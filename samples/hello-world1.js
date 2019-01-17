function Person(name) {
    this.name = name;
    this.sayHi = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Hello my name is' + _this.name);
        });
    };
}
var person = new Person('Bob');
person.sayHi();
