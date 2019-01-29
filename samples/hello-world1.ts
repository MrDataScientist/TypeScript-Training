function Person(name: any) {
    this.name = name
    this.sayHi = function() {
        setTimeout(() => {
            console.log('Hello my name is'+ this.name)
        })
    }
}

const person = new Person('Bob');

person.sayHi();