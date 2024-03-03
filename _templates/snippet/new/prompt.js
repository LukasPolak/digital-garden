const { getModuleList } = require("../../utils");

module.exports = [
  {
    type: "select",
    choices: getModuleList().map((snippet) => `snippets/${snippet}`),
    name: "directory",
    message: `What should be the folder location of the new snippet?`,
  },
  {
    type: "input",
    name: "name",
    message: "What is the snippet name (in kebab-case)?",
  },
  {
    type: "select",
    name: "extension",
    message: "What is the snippet extension?",
    choices: ["ts", "tsx"],
  },
  {
    type: "input",
    name: "title",
    message: "What is the snippet title?",
    initial: "TODO: Add title",
  },
  {
    type: "input",
    name: "description",
    message: "What is the snippet description?",
    initial: "TODO: Add description",
  },
];
