// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello'
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


//  GETELEMENTBYID  //
// console.log(document.getElementById('header-title'));
// var hearderTitle = document.getElementById('header=title');
// var hearder = document.getElementById('main=title');
// console.log(headerTitle);
// header.Title.textContent = 'Hello';
// header.Title.textContent = 'Bye';
// console.log(headerTitle.innertext);
// hearderTitle.innerText = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';



//  GETELEMENTBYCLASSNAME  //
var ite = document.getElementsByClassName('list-group-item')
// console.log(ite);
// console.log(ite[1]);
// item[1].textContent = 'Hello 2' ;
// item[1].style.fontWeight = 'bold' ;
ite[2].style.backgroundColor = 'green' ;
ite[1].style.backgroundColor = 'green' ;
ite[3].style.visibility='hidden'

for(let i=0;i<ite.length;i++){
    ite[i].style.color = 'red';
    ite[i].style.fontWeight='bold';
}

//  GETELEMENTBYTAGNAME  //

// var items = document.getElementsByTagName('lix');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2' ;
// li[1].style.fontweight = 'bold' ;
// li[1].style.backgroundcolor = 'yellow' ;
// x
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }



// QuerySelector //


// let header = document.querySelector('#main-header');
// header.computedStyleMap.borderBottom = 'solid 4px #ccc';
 
// let input = document.querySelector('input');
// input.value = 'Hello World'


// let submit = document.querySelector('input[type="submit]');
// submit.value="SEND"
let headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom  = 'solid 3px #000';

let Items = document.getElementsByClassName('title');
console.log(Items);
Items[0].style.fontWeight = 'bold';

//   parent element   //
let itemListmain = document.querySelector('#items');
itemListmain.parentElement.style.backgroundColor='#f4f4f4';

//  child nodes  //
itemListmain.children[1].style.backgroundColor='blue'
//  first child  //
console.log(itemListmain.firstChild);
// firstelement child  //
itemListmain.firstElementChild.textContent='firstElementchild'

// last child  //
console.log(itemListmain.lastChild);

//  lastelement child  //
itemListmain.lastElementChild.textContent='lastElementChild'


//  next sibling  //
console.log(itemListmain.nextSibling);

//  nextElement sibling  //
console.log(itemListmain.nextElementSibling);

//  Previous sibling  //
console.log(itemListmain.previousSibling);

//  PreviousElement sibling  //
console.log(itemListmain.previousElementSibling);
itemListmain.previousElementSibling.style.color='green'
//  create element  //


//create div//
let newDiv=document.createElement('div');
//  add class  //
newDiv.className='hello';
//  add id //
newDiv.id='hello1'

//  set attribute  //
newDiv.setAttribute('title','Hello Div');
//  create textnode  //
let newDivText=document.createTextNode('Hello World div');
//  add text to div  //
newDiv.appendChild(newDivText);


let container= document.querySelector('header .container');
let h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='50px';

container.insertBefore(newDiv, h1)
