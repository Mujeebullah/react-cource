// const & let
// const and let variable are used for block level script
// const variable cannot be re assign but let variable can be re assing with new data
// Remember (const variable type object data can be changed, but const variable cannot be re assign)
// What is object and how we can use it
// What is Array/collection and how we can use it
// What is normal function and what is arrow function
// What is loop and how we can use it
// what is foreach method/function used with array
// what is map function used with array
// 

console.log('Lecture 02')
let student1 = 'Waleed'
const student2 = 'Zohaib'
const person = {
    name : 'Abid',
    age: 33
}
person.age = 45;

const nums = [1,2,3,4]
nums.push(5)

// function
function sayhello(){
    console.log('Hello')
}

//arrow function
const sayHeloAgain = (name) => console.log('Say Hello Again')

//array
const fruits = ['Apples', 'Bananas', 'Oranges']

console.log(student1)
console.log(student2)
console.log(person)
console.log(nums)
sayhello();
sayHeloAgain()

//foreach
fruits.forEach((fruit, index) => console.log(`${fruit} is at index ${index}`))

//map
const singleFruit = fruits.map((fruit) => fruit.slice(0, -1))
console.log(singleFruit)

// smashers array
const smashers = ['Arsalan', 'Dani', 'Tanvir', 'Anwar', 'Anis'];

//slice
const selectedSmashers = smashers.slice(0, -1);
const lastTwoPlayers = smashers.slice(-2)
console.log(selectedSmashers)
console.log(lastTwoPlayers)

//filter

const people = [
    {id: 1, name: 'Babar Azam'},
    {id: 2, name: 'Saim Ayub'},
    {id: 3, name: 'Fakhar Zaman'},
    {id: 4, name: 'Usman Khan'},
    {id: 5, name: 'Shafique'}    
]
console.log('People', people)
const filteredPeople = people.filter(person => person.id !== 2)

console.log('FilterPeople', filteredPeople)




