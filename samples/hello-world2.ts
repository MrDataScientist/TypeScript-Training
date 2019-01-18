function BuildPerson(personData){

    const firstName = personData.firstName,
          lastName = personData.lastName,
          address = personData.address;

    return `${firstName} ${lastName} ${address}`;
}

const personData = {
    firstName: 'Tarik',
    lastName: 'Nakdi',
    address: 'Geroldstr'
};