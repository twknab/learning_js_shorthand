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
