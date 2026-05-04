// spread operator
// destructure / destructuring
// classes
// sub classes
// modules

//spread operator is used to spread out the elements of an array elements or properties of object
// we use spread operator alot in React js
console.log('Lecture 02')

const arr1 = [1, 2, 3, 4]

const arr2 = [5, 6, 7];

const mergedData = [...arr1, ...arr2]

console.log('mergeData', mergedData);


const filterArray = [...arr1.filter((item) => item !== 4)]

console.log('filterArray', filterArray)

const person = {
    id: 1,
    name: 'Zahid Farooq',
    address: 'Rabwah'
}

console.log('Before using spread operator', person)

const person2 = {...person, name: 'Azam'}

console.log('After using spread operator', person2);


//destructuring is basically is used to pull values out like objects / array
const profile = {
    name: 'Hassan',
    address: {
        street: '8/27 Darul Rehmat Shaqri',
        city: 'Chenab Nagar'
    },
    hobbies: ['movies', 'music']
}


const { name, hobbies } = profile;

console.log(name)

const {street} = profile.address;

console.log(street, hobbies[0])


