function BuildPerson(_a) {
    var firstName = _a.firstName, lastName = _a.lastName, address = _a.address;
    return firstName + " " + lastName + " " + address;
}
var personData = {
    firstName: 'Tarik',
    lastName: 'Nakdi',
    address: 'Geroldstr'
};
BuildPerson(personData);
