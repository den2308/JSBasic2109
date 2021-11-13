class User{
    static someStatic(){
        console.log('Some user')
    }
}
User.someStatic()
//////////
class User1{}
User1.staticMethod= function(){
	console.log('Some user2')
}

class User{
	constructor(){
  	_sallary = 400
  }
  getSallaryValue(){
  	return this._sallary
  }
  setSallaryValue(value){
  	this._sallary=value
  }
}

const syUserName = (name)=>{
	console.log(name)
}

const getUserFromServer=(callback)=>{
	const name = fetch('https://google.com/getUser')
  callback(name)
}
getUserFromServer(syUserName)
////////
const someError = new Error({message:'some error', code:342})
//throw 'Some error'
///////

const somePromise= new Promise((resolve, reject) => {
    reject('Some error')
})

somePromise
.then((result) => {
        console.log('result1', result)
        return somePromise
    })
.then((result) => {
        console.log('result2', result)
    })

.catch((error)=>{
	console.log('error',error)
})

const promise1 = new Promise((resolve,reject)=>{
	setTimeout(resolve,1000,'one')
})
const promise2 = new Promise((resolve,reject)=>{
	setTimeout(resolve,1000,'two')
})
const promise3 = new Promise((resolve,reject)=>{
	setTimeout(resolve,1000,'three')
})
const promise4 = new Promise((resolve,reject)=>{
	reject('Error')
})
Promise.all([promise1,promise2,promise3,promise4])
.then(value=>{console.log(value)},reason=>{
console.log(reason)
})

//Home Work07.11.2021//examples
const ourValidator = new validator()
ourValidator.isEmail(asdasdasd@asd.com)//true/false
ourValidator.isEmail=function(someMail){
	asgbdnsdkfmklsd.regexp('\S+@\S+\.\S+')
return result(true/false)
}
isDomain(email=asdasd@gmail.com,domain=gmail.com){
	if(asdasd===domain){
	return true
	}else{
		return false
	}
}

