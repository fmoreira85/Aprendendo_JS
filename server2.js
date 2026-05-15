const http = require("http");

const server = http.createServer(function(req, res) {

  if (req.url === "/") {
    res.end("Página inicial");
  }

  else if (req.url === "/usuarios") {
    res.end("Lista de usuários");
  }

  else {
    res.end("Página não encontrada");
  }

});

server.listen(3000);