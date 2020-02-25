const yaml = require("js-yaml");
const fs = require("fs");

// Get document, or throw exception on error
module.exports.readVersion = content => {
  try {
    const doc = yaml.safeLoad(content);
    return doc.current_version;
  } catch (e) {
    console.log(e);
  }
};

// Get document, or throw exception on error
module.exports.writeVersion = (content, version) => {
  try {
    const doc = yaml.safeLoad(content);
    return yaml.safeDump({ ...doc, current_version: version });
  } catch (e) {
    console.log(e);
  }
};
