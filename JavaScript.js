try{
console.log('String1')
console.log(asdasd)
console.log('String2')
}catch(err){
console.log('err',err.message)
}

function asdas(){
	try{
  	...code	
  }catch(err){
  	console.log(err)
  }
}

try{
 {{{{{{{{{{{{}}}}}}
}catch(err){
	console.log(err)
}



try{
	setTimeout(()=>{console.log('John Weak',dfghj)},1000)
}catch(err){
	console.log(err.message)
}
setTimeout(()=>{
	try{
  	console.log('John Weak',dfghj)
  }catch(){
  console.log(err.message)
  }
},1000)

var requestOptions = {
  method: 'GET',
};

fetch("http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d5e0d92eb47081c243a43f17dbf15e5c", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

async function asyncFunction(){
	
}



const someFunction = async ()=>{
	const getWeatherData = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d5e0d92eb47081c243a43f17dbf15e5c")
  console.log('getWeatherData',getWeatherData)
}

const someFunctionWithTryCatch = async ()=>{
try{
const getWeatherData = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d5e0d92eb47081c243a43f17dbf15e5c")
  console.log('getWeatherData',getWeatherData)
}catch(err){
console.log(err)
}
	
}

