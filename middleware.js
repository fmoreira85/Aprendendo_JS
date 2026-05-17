const express = require("express");

const app = express();

function logger(req,res,next) {

    console.log("Método:", req.method);
    console.log("URL:", req.url);

    next();
    
}

app.use(logger);

app.get("/", function(req,res) {

    res.send("Home"); 
    
});

app.get("/usuarios", function (req,res) {

    res.send("Usuarios");
    
});

app.listen(3000);

console.log("Servidor rodando")