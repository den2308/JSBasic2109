const getATag = document.querySelector('a')
getATag.href='https://icases.ua/'
const tagp = document.getElementById('p1')
tagp.textContent='some tag p'
const sectionBlock = document.querySelector('section')
const someParagraph = document.createElement('p')
someParagraph.textContent='Virtual paragraph'
sectionBlock.appendChild(someParagraph)
const removeP = document.getElementById('removeP')
removeP.setAttribute('class', 'virtual atribute')
function handleClickToButton(){
console.log(window.history)
    	removeP.style.color='red'
}
//console.log(removeP.style)
//sectionBlock.removeChild(removeP)
//removeP.parentNode.removeChild(removeP)
