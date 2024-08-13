const http = require("http");

const server = http.createServer((req, res) => {
  customRouter(req, res);
});

const customRouter = (req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/about") {
  } else {
    res.write("404 Not Found");
    res.end();
  }
};

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
