var oneVar = 'one';
var OneVar = 'one';

//var commentsOne = 2
/*
	var commentsTwo 1 
*/
globalVar = 1
var localVar = 2
console.log(globalVar)
console.log(localVar)
//////////////////////
var a;
console.log(a);
console.log(emptyVar)
//////////
var ab='21';
ba = '21'
delete this.ab//error
delete this.ba//success
console.log(ab)
console.log(ba)

console.log(someA)
var someA = '123'
console.log(someA)
///////////////////////////////////
var baba='asd', asdd='asd'
var as,asd = 'asdasdasd'
///////////////////////////////////

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // та же переменная!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // другая переменная
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

console.log(someLet)
let someLet = 'asdasd'

const someConst = 'const'
const constObj = {
	a:'asd'
}
constObj = ''//error
constObj.a='asdasd'//success

console.log(10+'1'-1)//100

//5*8
//x=-x
//x-y
/*a>b 
a<b
a>=b
a<=b
a==b
a===b*/
console.log('Я'>'А')//true
console.log('2'>1)//true
console.log('1'==1)//true
console.log('1'===1)//false
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
console.log(0==false)//true
