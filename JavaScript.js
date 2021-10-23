const carObj = {
    car1: 'ford',
    car2: 'reno',
    car3: 'mazda',
    car4: 'toyota'
}

for (const key in carObj) {
    console.log(key + ' value is: ' + carObj[key])
}

const carArray = ['ford', 'mazda', 'bmw']
carArray.vw = 'passat'
carArray.someMethod = function () {
    console.log('some')
}

for (const key in carArray) {
   console.log(key + ' value is: ' + carArray[key])
}

for (const iterator of carArray) {
   console.log(iterator)
}

const someString = new String('some')
console.log(someString)
console.log('qwerty'.charAt(1))
console.log('qwerty'[1])

const changeSymbolInString = 'qwerty'
changeSymbolInString[1]='x'
console.log(changeSymbolInString)

const someString = 'asdad'
const someStringString = String('asdasd')
const someStringObj = new String('asdasd')
console.log(typeof someString)
console.log(typeof someStringString)
console.log(typeof someStringObj)


{
 Object:{
    String:{

    },
    Number:{

    },
    Boolean:{

    }
	}
}
const someNubmer = 123
const someNumberNumber=Number(123)
const someNumberConstructor = new Number(123)
console.log(someNumberNumber===123)//true
console.log(someNumberConstructor===123)//false
console.log(Number('dfghj'))//NaN


const someObject = {}
const someObjectObject= Object({})
const someObjectConstructor = new Object({})


const someBoolean = true;
const someBoleanBolean = Boolean(true)
const someBoleanConstructor = new Boolean(true)
console.log(someBoolean)
console.log(someBoleanBolean)
console.log(someBoleanConstructor)












