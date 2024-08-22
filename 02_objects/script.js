// OBJECTS in JS have properties and things they can do(methods)
// object literal notation
// this keyword is similar to self in python, the 'this' keyword is a context object representing the context in which the current code is executing
//in order to use this inside a method to refer to the object that the method is associated with, we need to use a regular function declartion to set the method, not an arrow function, but callbacks functions within the method may use arrow functions

let user = {
  name: "crystal",
  age: 45,
  email: "crystal@gmail.com",
  location: "bangladesh",
  blogs: [
    {title: "Top 3 lender pitfalls", likes: 90},
    {title: "LLMs on the rise", likes: 70}
  ],
  login: function () {
    console.log("User logged in");
  },
  logout: function () {
    console.log("User logged out");
  },
  logBlogs() {
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    })
  }
};

console.log(user);
console.log(user.name);
console.log(user["name"]);
user["name"] = "chun-li";

console.log(user.name);

user.age = 65;

console.log(typeof user);
user.login();
user.logout();
user.logBlogs();


// Math object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(9.9));
console.log(Math.round(9.4));
console.log(Math.ceil(9.4));
console.log(Math.floor(9.4));
console.log(Math.trunc(9.4)); // takes away the decimal and leves the integer

// random numbers
const random = Math.random(); // always between 0 -1
console.log(Math.round(random * 100))

// primitive and reference types
console.log("Primitive types");
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

console.log("Reference types");
userOne = {name: 'ryu', age: 30};
userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;

console.log(userOne, userTwo);
