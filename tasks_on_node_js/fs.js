const fs = require("node:fs");

//Read the file content
function readTheFileContent() {
  fs.readFile("../test_files/output.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
}

// Write the file content
function writeTheFileContent() {
  fs.writeFile(
    "../test_files/output.txt",
    "Hello, world! Welcome to the new age",
    (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("File written successfully!");
    },
  );
}

// Check if file exists
function checkIfFileExists() {
  let exists = fs.existsSync("../test_files/output.txt");
  return exists;
}
