const soomeObject = {
	userName:'John Weak',
  callUserName: function(){
  	console.log(this.userName)
  }
}
soomeObject.callUserName()


userName= 'Global John Weak'

const someObject = {
	userName:'Local John Weak'  
}

function someFunction(){
	console.log(this.userName)
}

someFunction()

someFunction.apply(someObject)


function someFunction(){
	console.log(this.userName)
}
const callFunction = someFunction.bind({userName:'John not Weak'})

const callFunctionSecond = someFunction.bind({userName:'John super Weak'})

someFunction()
callFunction()
someFunction()
callFunctionSecond()

const f=()=>{
console.log('hello arrows')
}
f()

const soomeObject = {
	userName:'John Weak',
  callUserName: ()=>{
		console.log('John Weak')//'John Weak'
  	console.log(this.userName)//undefined
  }
}

soomeObject.callUserName()


{
	someMethod:()=>{}
}


function User(name){
	///this={}
	this.name = name;
  ///return this;
}
let someuser = new User('John Weak')
console.log(someuser)


const someObject = {
	a:1,
  getValueForA(){
  	this.a+1
  },
  setValueForA(x){
  	this.a+x
  }

}
