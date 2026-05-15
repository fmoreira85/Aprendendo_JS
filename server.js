const http = require("http");

const server = http.createServer(function(req, res) {
    console.log(req.url);
  res.end(" O  lá mundo");
});

server.listen(3000);

