console.log(typeof [])

if(true){
	console.log('some conclusion')
}
if(true){
	console.log('if statement')
}else{
	cosole.log('else statement')
}
const someImportantVar = 1
if(someImportantVar!==1){
	console.log('if statement')
}else if(someImportantVar===1){
	console.log('else if1 statement')
}else if(someImportantVar>1){
	console.log('else if2 statement')
}else{
	console.log('else statement')
}

const someString = 'string1'
const someString2 = new String('string2')
console.log('someString',someString)
console.log('someString2',someString2)

const someBool = new Boolean(false);
if(someBool) console.log('true condition')
if(someBool==true)console.log('false condition')


const switchVar = 1;
switch (switchVar) {
    case 1:
        console.log('the first')
        break;

    default:
    	console.log('by default')
        break;
}

for ('start'; 'condition'; 'interation controle') {
   'block of code'
}

for (let i = 0; i < 10; i++) {
   console.log(i)
}

do {
  i += 1;
  console.log(i);
} while (i < 5);
let i =1
while(i>5){
console.log(i)
	i=+1
}

for (let i = 0; i < 10; i++) {
   console.log(i)
   if(i>5) break
}

for (let i = 0; i < 10; i++) {
   if(i==3) {
   	console.log(i)
   }else{
   	continue
   }
}


