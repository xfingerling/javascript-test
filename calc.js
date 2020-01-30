"use strict";

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "**": (a, b) => a ** b
  };

  this.calculate = function(str) {
    let split = str.split(" ");
    let a = +split[0];
    let sign = split[1];
    let b = +split[2];

    if (!this.method[sign]) {
      alert("Нет такого метода");
    } else if (Number.isNaN(numA) || Number.isNaN(numB)) {
      alert("Ввели некоректный символ");
    }

    return this.method[sign](numA, numB);
    }

    return this.methods[sign](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
