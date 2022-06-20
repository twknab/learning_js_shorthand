// declare x and y but define z:
let x, y, z = "thing";

// define multiple variables with commas
let a = "something",
    b = "else",
    c = "done";

// similar to hacklang, can provide a fallback
let test = undefined;
let foo = test || "default value";
foo; // 'default value'

test = 'not nothing';
foo = test || "default value";
foo; // 'not nothing'


// write a function as a variable with =>
const writeMyName = (shouldWriteName) => {
  typeof shouldWriteName;
  if (typeof shouldWriteName !== "boolean")
    throw Error("Input must be boolean.");
  if (shouldWriteName) console.log("Hello Tim!");
  else console.log("Hello stranger!");
};

writeMyName(true);

const things = {
  backpack: "backpack",
  tent: "tent",
  SUV: "suv",
};

// destructuring a variable (see this a lot in newer react apps)
let { backpack, tent } = things;
backpack;

// renaming destructured variables
let { SUV: vehicle } = things;
console.log(vehicle);

// can also destructure an array
const otherThings = ["firepit", "smores"];
let [firepit, smores] = otherThings;
firepit;

// spread operators
let thingsToDo = ["hike", "camp", "oraganize", "sleep", "dream"];
let favoriteThings = ["make art", "draw"];
// use spread operator to join, can even add something in between
let funThings = [...thingsToDo, "cook", ...favoriteThings];
funThings;
