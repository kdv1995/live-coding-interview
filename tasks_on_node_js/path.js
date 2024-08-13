const path = require("node:path");

function joinThePath(...args) {
  const path1 = path.join(__dirname, ...args);
  console.log("filename", __filename);
  console.log("dirname", __dirname);

  console.log("path1", path1);
  return path1;
}
// joinThePath("folder", "file.js");

//What does absolute path mean?
//An absolute path is defined as the specifying the location of a file or directory from the root directory(/).
//In other words,we can say that an absolute path is a complete path from start of actual filesystem from / directory.

//What does relative path mean?
//A relative path is a path that describes the location of a file or directory in relative to the current working directory.
//In other words, the relative path is a path that is relative to the present working directory.

function resolveAbsolutePathToRelativePath() {
  const path1 = path.resolve(__dirname, "folder", "file.js");
  console.log("path1", path1);
  return path1;
}

// resolveAbsolutePathToRelativePath();

function extractFileExtensionOfTheFile() {
  const path1 = path.extname(__filename);
  console.log("path1", path1);
  return path1;
}

// extractFileExtensionOfTheFile();
