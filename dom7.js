/* var itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
//console.log(ltemlist.parentElement);
console.log(itemlist.parentNode.parentNode);
itemlist.parentNode.style.backgroundColor='coral';
itemlist.parentNode.parentNode.style.backgroundColor='pink';
itemlist.parentNode.parentNode.parentNode.style.backgroundColor='red';
itemlist.parentNode.parentNode.parentNode.parentNode.style.backgroundColor='pink';*/
/* var itemlist=document.querySelector('#items'); 
console.log(itemlist.parentElement);
//console.log(ltemlist.parentElement);
console.log(itemlist.parentElement.parentElement);
itemlist.parentElement.style.backgroundColor='grey';

 */
var itemlist=document.querySelector('#items'); 



//console.log(itemlist.ChildNode);
//console.log(itemlist.lastChild);
//console.log(itemlist.firstElementChild);
//console.log(itemlist.lastChild);




/* console.log(itemlist.children);
console.log(itemlist.children[0]);
itemlist.children[0].style.backgroundColor='gray';
 */
//itemlist.firstElementChild.style.backgroundColor='pink';
//console.log(itemlist.nextSibling);
//console.log(itemlist.nextElementSibling);
//console.log(itemlist.previousSibling);
//itemlist.previousElementSibling.style.backgroundColor='yellow';
//itemlist.nextElementSibling.style.backgroundColor='yellow';
//itemlist.lastElementChild.style.backgroundColor='yellow';

//create div
  var newdiv=document.createElement('div');
newdiv.className='hi';
newdiv.id='hello';
console.log(newdiv);
newdiv.setAttribute('title','helloworld');
var newdivtext=document.createTextNode("HEllo");
newdiv.appendChild(newdivtext);
//inserting HEllo before itemlister
var container = document.querySelector('header .container ');
var h1=document.querySelector('header h1');
console.log(newdiv);
container.insertBefore(newdiv,h1);
newdiv.style.fontSize='40px'; 







 


//itemlist.firstElementChild.textContent='have a nice day';




 




var newDiv2 = document.createElement('div');

newDiv2.className = 'hello'

newDiv2.id = 'hello2';

newDiv2.setAttribute('title', 'Hello Div')

var newDivText1 = document.createTextNode('HEllo ')

newDiv2.appendChild(newDivText1);


var container2 = document.querySelector('div ul  ');
var clock = document.querySelector("div li");

container2.insertBefore(newDiv2, clock);