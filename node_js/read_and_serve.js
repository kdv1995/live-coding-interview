const http = require("http");
const fs = require("fs");
const path = require("path");
const { cwd } = require("process");
const { stat, open, rm, rmdir } = require("fs/promises");

const server = http.createServer((req, res) => {
  fs.readFile("../test_files/input.txt", "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    }
  });
});

const source = path.join(cwd());
const destination = path.join(cwd(), "..", "node_js_copy");

//Copy directory
// fs.cp(source, destination, { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Directory copied");
// });
//Open file
// fs.open("../test_files/input.txt", "r", (err, fd) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File opened successfully");
// });

//Read file
// fs.readFile("../test_files/input.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });
//Remove file
// fs.rm(destination, { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Directory deleted");
// });

// const readFileStatPromise = new Promise((resolve, reject) => {
//   fs.tat("../test_files/input.txt", (err, stats) => {
//     resolve(stats);
//   });
// }).catch((err) => {
//   console.log(err);
// });

// readFileStatPromise.then((stats) => {
//   console.log(stats);
// });


// fs.promises.readFile(): Read the contents of a file.
// fs.promises.writeFile(): Write data to a file.
// fs.promises.readdir(): Read the contents of a directory.
// fs.promises.copyFile(): Copy a file from one path to another.
// fs.promises.rename(): Rename a file or directory.
// fs.promises.stat(): Get statistics about a file or directory.
// fs.promises.unlink(): Remove a file.
// fs.promises.mkdir(): Create a new directory.
// fs.promises.rmdir(): Remove a directory.


server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
