const handleInputClick=()=>{
console.log('click to input')
}
const handleTestClick=()=>{
	console.log('test click')
}
const someElement = document.getElementById('textwithEvent')
someElement.onclick = function(event){
console.log('click on text',event)
}
//someElement.addEventListener("click", ()=>{console.log('listener')})
