const express = require("express");

const app = express();


app.get("/", function (req,res) {
    res.send("API funcionando");
    
});

app.get("/usuarios", function (req,res) {


    const usuarios = [
        {nome:"João"},
        {nome: "Maria"}
    ];

    res.json(usuarios);
    
});

app.listen(3000);

console.log("Servidor rodando...")