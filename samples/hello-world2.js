function BuildPerson(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    var address = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        address[_i - 1] = arguments[_i];
    }
    return firstName + " " + lastName + " " + address;
}
var partialAddress = ["Street Name", "street Number", "Po Box"];
var firstName = 'tarik', lastName = 'nakdi';
var personData = {
    firstName: firstName,
    lastName: lastName
};
var address = partialAddress.concat(['Staples Center']);
console.log(BuildPerson(personData, address));
//# sourceMappingURL=hello-world2.js.map