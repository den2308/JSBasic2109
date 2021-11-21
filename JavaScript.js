'use strict'
Object.frezzy({
	userName :'John Weak'
})

function SomeFunc(){
return 12
}
const SomeFunc2 = ()=>12

const somRunc3 = (a=2, b)=>a+b

const someObject = [1,2,3]
const someObject4 = [4,5,6]
const someObject5 = [...someObject,...someObject4]
console.log(someObject5)

const someObject5 = {
a:1,
b:2,
c:3,
someArray:[122,14]
}
const {a,b,c=21,someArray,d=32}=someObject5

const userName = 'John Weak'
console.log(`My name is: ${userName}`)

const mapExample = new Map()
mapExample.set('someProp','value')
console.log(mapExample.get('someProp'))

console.log(mapExample.size)

class User {
	constructor(){
  	console.log('chtoto vajnoe')
  }
	
  someMethods(){
  	console.log('ochen ochen vajnoe')
  }
  static someStaticMethod(){
  	console.log('static')
  }
}
const ourClass = new User()

ourClass.someMethods()
ourClass.someStaticMethod()//Error
User.someStaticMethod()//result






