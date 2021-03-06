// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const myOwnClosure = () => {
  const myName = 'Paul';

  const nestedClosure = () => {
    const myHobby = 'Basketball Cards'
    return `${myName} enjoys collecting ${myHobby}`
  }

  return nestedClosure;
}

const something = myOwnClosure();
something();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  const increment = () => {
    console.log(count += 1); // ++count also works
  }
  return increment;
};

const something = counter();
something();
something();
something();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const counterFactory = () => {
  let count = 0;

  const increment = () => {
    console.log(count += 1); // ++count also works
  }
  return increment;
};


const decrementFactory = () => {
  let count = 0;
  const decrement = () => {
    console.log(count -= 1);
  }
  return decrement;
};

const totalFactory = (a, b) => {
  return a + b;
};


let something = counterFactory();
something();
something();
something();
something();

let something2 = decrementFactory();
something2();
something2();

something();

totalFactory(something(), something2());
