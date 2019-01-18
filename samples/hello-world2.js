function BuildPerson(_a, address) {
    var firstName = _a.firstName, lastName = _a.lastName;
    if (address === void 0) { address = ['']; }
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
