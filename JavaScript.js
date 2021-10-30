function parentFunction(a, b) {
    const x = 1
    function childFunction(params) {
        console.log(a)
        console.log(b)
        console.log(x)
    }
}

function parentFunction(a, b) {
    function childFunction(c) {
        return c * 2
    }
    return childFunction(a) + childFunction(b)
}


let x = 10;
let y = 20;
const foo = z => {
  let x = 100;
  return x + y + z;
}

foo(30);//150


function parentFunction() {
		var userName = 'John Weak'
    return function callUserName(c) {
				console.log(userName)
    }
}

const callUserName2 = parentFunction()

callUserName2()


function parentFunction(x) {
		var counter = 1
    function callUserName(c) {
				console.log(counter+1)
    }
    callUserName()
    conslole.log(counter)
}
const someFunct2 = parentFunction(4)
someFunct2()
//lexical envirement for closure
{
	record:{
  	x=4,
    counter=1,
    record={
    	counter:counter
    }
  }
}

for (let index = 0; index < 100; index++) {
    
}
//lexical envirement for loop
{
	record:{
  	index:11;//11....15
  }
}

/////Objects
const a ={userName:'John Weak'}
const c = {userName:'John Weak'}
const b = a;
//a.userName='John not Weak'
/// == and === it's the same for Objects
console.log(a==b)//true
console.log(a==c)//false
console.log(a===b)//true
console.log(a===c)//false

//copy paste Objects
const a={
	name:'John',
  secondName:'Weak'
}
const b={}

//for (const key in a) {
//    b[key]=a[key]
//}
Object.assign(b,a,{name:'Some'})
console.log(a)
console.log(b)
console.log(a==b)









