//Classes
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
        console.log(`constructor called`)
    }

    greet(){
        console.log(`Hi My name is ${this.name} and i am ${this.age} years old`)        
    }
}

const person1 = new Person('Adbul Hamid', 25)
person1.greet();
const person2 = new Person('Abdul Ghafor', 34)
person2.greet()

// subclass inherits attributes / properties and functions/methods of parent class
class Customer extends Person{
    constructor(name, age, balance){
        super(name, age);
        this.balance = balance;
    }
    info(){
        return `${this.name} owes ${this.balance}`
    }
}

const customer1 = new Customer('Abid', 45, 45000)
console.log(customer1.info())

// Modules
// modules are major part of any framework bacause obviously you are not putting every thing in one javascript file
// in simple word moduels are pages. let suppose you have different components on different pages and export them now to use those components in your main file you need to import

// Example
// file1 (file1.js)
// export const name = 'John'
// export const nums = [1,2,3,4]
// export default Person



//file2 (file2.js)
// import {name, nums} from './file1.js'
// import Person from './file.js'

// console.log(name)