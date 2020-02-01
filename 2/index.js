"use strict";

// spred
const arrNum = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [...arrNum];

const joinArr = [...arrNum, ...arr2];
const newArr = [...joinArr, 23, 45];

console.log(Math.max(...newArr));

console.log(newArr);

// rest

function getArgs(double, ...args) {
  for (let el of args) {
    console.log(el * double);
  }
}

getArgs(2, 2, 3, 4, 5, 5);

// деструктуризация массива

const [a, b, c, d, e] = arrNum;
console.log(c);

// spred в объекте

const user = {
  name: "John",
  age: 25,
  friends: ["dffsa", "dsada", "dsa"],
  parents: {
    papa: "dsddsa",
    mama: "dgfdbf"
  }
};

const user2 = {
  name: "Ann",
  isAdmin: true
};

const newUser = { ...user, ...user2 };

console.log(newUser);

// деструктуризация объекта

const {
  name: green,
  age = 40,
  friends: [a, b, c],
  parents: { papa, mama }
} = user;

console.log(papa);
