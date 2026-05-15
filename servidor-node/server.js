const http = require("http");

const server = http.createServer(function (req,res) {

    if (req.url === "/") {
        res.end("home");
    }

    else if (req.url === "/usuarios") {

        const usuarios = [
            {nome: "João"},
            {nome:"Maria"}
        ]

        res.end(JSON.stringify(usuarios));
    }

    else
     {
        res.end("404");
     }
});

server.listen(3000);

console.log("Servidor rodando...")