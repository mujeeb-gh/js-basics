// Parents Children & Siblings

const article = document.querySelector("article");

console.log(article.children);

// we cannot use forEach on an HTML collection, only on an array or NodeList, so we convert the HTML collection to an array

Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});

const title = document.querySelector('h2');
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);