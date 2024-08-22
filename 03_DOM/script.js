// Querying the DOM using the 'document' object
// const para =document.querySelector('p') // selecting the first p tag
// const para =document.querySelector('.error') // selecting by class name
// const para =document.querySelector('div.error') // selecting by class name and tag name

// const para = document.querySelector("body > h1"); // selecting by class name and tag name
// const errors = document.querySelectorAll(".error");

// const paras = document.querySelectorAll("p"); // selecting all p tag element, returns a nodelist which looks like, but is not an array

// console.log(para);

// console.log(paras);

// console.log(errors);


//get an element by ID
const title = document.getElementById('page-title'); // we do not need # as we would using a query selector

//get an element by their class name
const errors = document.getElementsByClassName('error'); // returns a collection

//get an element by their tag name
// const paras = document.getElementsByTagName('p');


// adding and changing page content
const para  = document.querySelector('p');


para.innerText = "Hello Universe";
console.log(para.innerText);

const paras = document.querySelectorAll('p');

// changing the text
paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += ' - new text';
})

// changing the html
const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = '<h2>This is a new h2 content</h2>';

const people = ['john', 'stark', 'tonia', 'lidya'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
})

