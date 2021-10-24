function sumTwoParams(a,b) {
    return a+b
}

const sumFunction2 = function sumTwoParams2(a,b) {
    return 4
}

var mySomeImportantFunction

if(someVar===true){
	mySomeImportantFunction = function sumTwoParams(a,b) {
    return a+b
}
}

const someObj = {
	a:function asd(){
		console.log('say somthing	')
  }
  }
}
someObj.a()

function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}


////Hoisting
sayMyName('John Weak')

function sayMyName(name){
	console.log('some name is: '+ name)
}

console.log('1',someVar)
someVar = 4
console.log('2',someVar)
someVar +2
console.log('3',someVar)
var someVar
console.log('4',someVar)

var a = 1;
var b
console.log(a+' :is a and b is: ')
b = 2


function globalFunction(){
const someVar = 433
	console.log()
}

function parentFunction(){
	const someVar = 123
	function childFunction(){
  	console.log(someVar)
  }
}

const someString = new String('asdasd');

String.newMyMethod = 'sdfghjk'
console.log(someString.newMyMethod)






