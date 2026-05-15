const http = require("http");

const server = http.createServer(function(req, res) {
  res.end("Olá Fabio");
});

server.listen(3000);

