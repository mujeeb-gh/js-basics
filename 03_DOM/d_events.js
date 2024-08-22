// events - click

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  // ul.append(li);
  ul.prepend(li);
});

const ul = document.querySelector("ul");
// ul.remove();

const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     //console.log("Item clicked")
//     // console.log(e);
//     // console.log(e.target);
//     // e.target.style.textDecoration = "line-through";
//     console.log("event in LI");
//     e.stopPropagation(); // to stop event bubbling up
//     e.target.remove();
//   });
// });

ul.addEventListener("click", (e) => {
  // console.log("event in UL");
  // console.log(e.target);
  if (e.target.tagName === "LI") { // event delegation
    e.target.remove();
  }
});
