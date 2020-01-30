const users = [
  {
    id: 1,
    name: "John",
    role: "admin",
    age: 34,
    gender: "male"
  },
  {
    id: 2,
    name: "Alex",
    role: "user",
    age: 14,
    gender: "female"
  },
  {
    id: 3,
    name: "Sue",
    role: "admin",
    age: 25,
    gender: "male"
  },
  {
    id: 4,
    name: "Alice",
    role: "user",
    age: 12,
    gender: "female"
  }
];

// функция возвращает массив значений
function getUsersProp(usersArr, prop) {
  const result = [];

  for (const obj of usersArr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }

  return result.length ? result : "Такого свойства нет";
}

console.log(getUsersProp(users, "name"));

// средний возвраст
function averageAge(usersArr) {
  let result = 0;
  for (let i = 0; i < usersArr.length; i++) {
    result += usersArr[i].age;
  }
  return result / usersArr.length;
}

console.log(averageAge(users));

// возвращает информацию пользователя по id
const getUserById = (arr, id) => {
  let isUserFound = false;
  for (const user of arr) {
    if (user.id === id) {
      isUserFound = true;
      for (const key in user) {
        console.log(`${key}: ${user[key]}`);
      }
    }
  }
  if (!isUserFound) console.log("Такого пользователя нет");
};

getUserById(users, 3);
