const Employee = {
    working:true
}
const designers={
    canDraw:true
}
console.log('designers',designers)
designers.__proto__=Employee
console.log(designers)
VM273:7 designers {canDraw: true}canDraw: true[[Prototype]]: Objectworking: true[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()length: 0name: "get __proto__"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]set __proto__: ƒ __proto__()
VM273:9 {canDraw: true}canDraw: true[[Prototype]]: Objectworking: true[[Prototype]]: Object
undefined
Object.getPrototypeOf
Object.setPrototypeOf
ƒ setPrototypeOf() { [native code] }
'sdfghj'.length
6
const Employee = {
    working:true
}

undefined
const Employee = {
    working:true
}
function developer(name){
    this.name = name
}
developer.prototype= Employee
const developer1 = new developer('John Weak')
console.log(developer1)
VM3669:9 developer {name: 'John Weak'}name: "John Weak"[[Prototype]]: Objectworking: true[[Prototype]]: Objectconstructor: ƒ Object()assign: ƒ assign()create: ƒ create()defineProperties: ƒ defineProperties()defineProperty: ƒ defineProperty()entries: ƒ entries()freeze: ƒ freeze()fromEntries: ƒ fromEntries()getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()getOwnPropertyNames: ƒ getOwnPropertyNames()getOwnPropertySymbols: ƒ getOwnPropertySymbols()getPrototypeOf: ƒ getPrototypeOf()hasOwn: ƒ hasOwn()is: ƒ is()isExtensible: ƒ isExtensible()isFrozen: ƒ isFrozen()isSealed: ƒ isSealed()keys: ƒ keys()length: 1name: "Object"preventExtensions: ƒ preventExtensions()prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}seal: ƒ seal()setPrototypeOf: ƒ setPrototypeOf()values: ƒ values()arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
undefined
const Employee = {
    working:true
}
function developer(name){
    this.name = name
}
developer.prototype= Employee
const developer1 = new developer('John Weak')
const developer2 = developer1.constructor('John not weak')
{working: true}
class Employee {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
VM5208:1 Uncaught SyntaxError: Identifier 'Employee' has already been declared
class Employee  {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    callMyName(){
    console.log(this.name)    
}
}
const someUser = new Employee('John Weak',45)
someUser.callMyName()

VM5708:1 Uncaught SyntaxError: Identifier 'Employee' has already been declared
class Employee1 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    callMyName() {
        console.log(this.name)
    }
}
class Employee1 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    callMyName() {
        console.log(this.name)
    }
}
class Developer extends Employee1{
    constructor(username){
    this.username = username
}
    sayHello(){
    console.log('Hi')
}
}
const dev1 = new Developer('Some Weak')
console.log(dev1)
class Developer extends Employee1{
    constructor(username){
    super('John Weak',45)
    this.username = username
}
    sayHello(){
    console.log('Hi')
}
}
const dev1 = new Developer('Some Weak')
console.log(dev1)
