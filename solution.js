"use strict";
console.clear();

console.log("------------------");

function doubleValues(arr) {
  return arr.map((item) => item * 2);
}
console.log("1: ", doubleValues([(1, 2, 3, 4, 5)]));

console.log("------------------");

function onlyEvenValues(arr) {
  return arr.filter((item) => item % 2 === 0);
}
console.log("2: ", onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8]));

console.log("------------------");

function showFirstAndLast(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let letters = arr[i].at(0) + arr[i].at(-1);
    newArr.push(letters);
  }
  return newArr;
}
console.log("3: ", showFirstAndLast(["amor", "beijo", "coragem"]));

console.log("------------------");

let arrOfObj = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
function addKeyAndValue(arr, key, value) {
  return arr.forEach((obj) => (obj.key = value));
}
addKeyAndValue(arrOfObj, "title", "instructor");
console.log("4: ", arrOfObj);

console.log("------------------");

function vowelCount(str) {
  let obj = {};
  let vowels =
    str
      .toLowerCase()
      .split(" ")
      .join("")
      .match(/[aeiou]/gi) || [];
  vowels.forEach((letter) => {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) obj[letter]++;
      if (!obj[letter]) obj[letter] = 1;
    }
  });

  return obj;
}
console.log("5: ");
console.log(vowelCount("Elie")); // {e:2,i:1};
console.log(vowelCount("Tim")); // {i:1};
console.log(vowelCount("Matt")); // {a:1})
console.log(vowelCount("hmmm")); // {};
console.log(vowelCount("I Am awesome and so are you")); // {i: 1, a: 4, e: 3, o: 3, u: 1};

console.log("------------------");
