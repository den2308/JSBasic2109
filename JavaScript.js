function Employee(){
	this.username = '',
  this.sallary = '',
  this.workSpace=''
}

function Manager (){
	Employee.call(this)
}

const someA = { a: 1, b: 2 };
const someB = Object.create(someA)
console.log(someB.a)

const someObj = {
	a:1,
  f:function(){
  	console.log(this.a)
  }
}
const someObj2 = Object.create(someObj)
someObj2.f()

function SomeF(name) {
    this.username = name
}
SomeF.prototype = {
    callMyName: function () {
        console.log(this.username)
    }
}

const callName = new SomeF('John Weak')
const callName2 = new SomeF('John not Weak')
callName.callMyName()
callName.callMyName()
callName2.callMyName()


function Persone(name,secondName,age){
	this.name=name;
  this.secondName=secondName;
  this.age=age
}
const person1 = new Persone('John','Weak',45)
console.log(Persone.prototype)

function Persone(name,secondName,age){
	this.name=name;
  this.secondName=secondName;
  this.age=age
}
console.log(Persone.__proto__)

function Persone(name,secondName,age){
	this.name=name;
  this.secondName=secondName;
  this.age=age
}
const person1 = new Persone('John','Weak',45)
const person2 = new person1.constructor('John2','not Weak',25)
console.log(person2)



