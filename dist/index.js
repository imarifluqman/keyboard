// import { fName, lName, designation } from "./info.js";
// console.log("hello world");
let element = document.getElementById("textarea");
let keyboard = document.querySelectorAll(".keyboard>div>button");
keyboard.forEach((key) => {
    key.addEventListener("click", () => {
        if (key.innerText === "Enter") {
            element.value += "\n";
            return;
        }
        if (key.id === "back") {
            element.value = element.value.slice(0, -1);
            return;
        }
        if (key.innerText === "Space") {
            element.value += " ";
            return;
        }
        element.value += key.innerText;
    });
});
export {};
// let mypromise = new Promise((resolve, reject) => {
//   resolve(`Hello ${fName} ${lName} ${designation}`);
//   //   setTimeout(() => {
//   // resolve(`Hello ${fName} ${lName} ${designation}`);
//   //   }, 2000);
//   reject(`Hello ${fName} ${lName} ${designation} reject`);
// });
// mypromise
//   .then((data) => {
//     console.log(data, "data");
//   })
//   .catch((error) => {
//     console.log(error, "error");
//   });
// global excutaion contex
