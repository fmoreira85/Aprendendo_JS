const login = require("./auth");
const produtos = require("./produtos")
const calcular = require("./Calc")

console.log(login("admin","123"));
console.log(produtos);
console.log(calcular.soma(9,5));
console.log(calcular.sub(10,5));