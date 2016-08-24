var colors = require('colors');

const displayErrors = (error) => {
  const errorText = (error.text !== undefined) ? `${error.text}` : '';
  const errorPlacement = (error.line !== undefined && error.column !==undefined) ? ` - ${error.line}:${error.column}\n` : '';
  return `${errorText}${errorPlacement}`;
};

const breakBuild = (buildHasErrors) => {
  if (buildHasErrors) {
    console.log('Breaking build due to CSS linting errors.'.bgRed.black);
    process.exit();
  }
};

module.exports = function(content, sourceMap) {
  var buildHasErrors = false;
  if (sourceMap.messages.length > 0) {
    console.log(`ERROR IN: ${sourceMap.opts.from}`.yellow);
    for (msg in sourceMap.messages) {
      if (sourceMap.messages[msg].severity === 'error') {
        buildHasErrors = true;
        console.log(displayErrors(sourceMap.messages[msg]).yellow);
      }
    }
    breakBuild(buildHasErrors);
  }
  return content;
};
