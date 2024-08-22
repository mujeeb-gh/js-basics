// Copy event

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log("Copyright alert!")
});

// Mouse event
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e.offsetX, e.offsetY)
  box.textContent = `x pos = ${e.offsetX}, y pos = ${e.offsetY}`;
})


// Wheel event
document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY)
})