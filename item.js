// console.log(window.location.pathname);
// console.log(window.location.href);

const arr = ["CAT", "DOG", "MOUSE"];

let queryString = window.location.search;

let params = new URLSearchParams(queryString);

console.log(params);

let id = params.get("id");

let value = params.get("param");
console.log(id);
console.log(value);

console.log(arr[id]);
