const fileSystem = require("fs");

const getModuleList = (path = "src/snippets") => {
  return fileSystem
    .readdirSync(path, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((file) => file.name);
};

module.exports = {
  getModuleList,
};
