function BuildPerson({firstName,lastName,address}){
    return `${firstName} ${lastName} ${address}`;
}

const personData = {
    firstName: 'Tarik',
    lastName: 'Nakdi',
    address: 'Geroldstr'
};

BuildPerson(personData);