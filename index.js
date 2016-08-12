var colors = require('colors');

const displayErrors = (error) => (
  `ERROR: ${error}`
);

const breakBuild = (buildHasErrors) => {
  if (buildHasErrors) {
    console.log('Breaking build due to CSS linting errors.'.bgRed.black);
    process.exit();
  }
};

module.exports = function(content, sourceMap) {
  let buildHasErrors = false;
  if (sourceMap.messages.length > 0) {
    console.log(`File: ${sourceMap.opts.from}`.yellow);
    for (msg in sourceMap.messages) {
      if (sourceMap.messages[msg].severity === 'error') {
        buildHasErrors = true;
        console.log(displayErrors(sourceMap.messages[msg].text).yellow);
      }
    }
    breakBuild(buildHasErrors);
  }
  return content;
};
