// We can get and set HTML attributes
/**

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// you can also add an attribute that doesn't exist yet


const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px'); // this overrides all current styles, we don't want that

title.style.margin = '50px'; // do this instead
title.style.color = 'crimson'; // do this instead

// title.style.font-size = '75px'; // this won't work in JS
title.style.fontSize = '75px'; // do this
 * 
 */

// const content = document.querySelector('p');
// console.log(content.classList)

// content.classList.add('error');
// content.classList.remove('error');

const content = document.querySelectorAll('p')
content.forEach(p => {
  if (p.textContent.includes('error')) {
    p.classList.add('error')
  } else if (p.textContent.includes('success')) {
    p.classList.add('success')
  }
})

const title = document.querySelector('.title');

title.classList.toggle('test') // toggle on
title.classList.toggle('test') // toggle off
