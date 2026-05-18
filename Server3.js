const express = require("express")

const app = express();

app.use(express.json());

const usuarios = [];

app.get("/usuarios", function (req,res) {

    res.json(usuarios);
    
});

app.post("/usuarios", function (req,res) {

   const usuario = {
    nome: req.body.nome,
    idade: req.body.idade
   };

   usuarios.push(usuario);
    
});

app.listen(3000);

console.log("Servidor rodando...");