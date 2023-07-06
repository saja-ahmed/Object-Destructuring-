// Object Destructuring 

let person = {
    firstName : 'saja',
    lastName :'ahmed',
}

// old sentence
// let fName = person.firstName;
// let lName = person.lastName;

// new sentence
// let {firstName: fName, lastName: lName} = person;

let {firstName, lastName, middleName = 'not found'} = person;
console.log(middleName);