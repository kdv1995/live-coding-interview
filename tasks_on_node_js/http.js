const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const routes = {
    "/": {
      GET: (req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end({ message: "You are on the home page with GET method usage" });
      },

      POST: (req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end({ message: "Home" });
      },
    },
    "/about": {
      GET: (req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end({ message: "about us" });
      },

      POST: (req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end({ message: "about us" });
      },
    },
  };

  if (routes[req.url] && routes[req.url][req.method]) {
    return routes[req.url][req.method](req, res);
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
