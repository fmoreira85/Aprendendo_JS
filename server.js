const http = require("http");

const server = http.createServer(function(req, res) {
    console.log(req.url);
  res.end(" Fabio");
});

server.listen(3000);

