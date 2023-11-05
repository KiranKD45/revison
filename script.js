// const btn = document.getElementById("btn");
// const head = document.getElementById("h1");
// btn.onclick("click", () => {
//   head.innerText = "i am changed";
// });

// let arr1 = [11, 44, 45, 101];

// arr1.unshift(45);
// console.log(arr1);

//promise
// let promiseLearning = new Promise(function (resolve, reject) {
//   const x = "kiran";
//   const y = "kiran";
//   if (x == y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promiseLearning.then(function () {
//   console.log("kiran is great");
// });

// promiseLearning.catch(function () {
//   console.log("kiran is mad");
// });

//callback

// const user = (name) => {
//   console.log("hiii " + name);
// };

// const call = (callback) => {
//   name = "kiran";
//   callback(name);
// };

// call(user);

//async and await

// const showPosts = async () => {
//   const response = await fetch("https://jsonplacenolder.typicode.com/posts");
//   const posts = await response.json();
//   console.log(posts);
// };
// showPosts();

//map

// let nums = [1, 25, 45, 11, 444];
// let result1 = nums.map((val) => {
//   return val * val;
// });
