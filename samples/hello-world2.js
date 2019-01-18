function BuildPerson(personData) {
    var firstName = personData.firstName, lastName = personData.lastName, address = personData.address;
    return firstName + " " + lastName + " " + address;
}
var personData = {
    firstName: 'Tarik',
    lastName: 'Nakdi',
    address: 'Geroldstr'
};
