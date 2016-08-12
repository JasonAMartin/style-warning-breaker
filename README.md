# style-warning-breaker

I created this Webpack plugin because I wanted a way to break the build process when CSS style linting fails. At the time of creating this CSS linting error were treated as warnings and the build was allowed to continue (verses JS linting errors, which break the build);


Style-warning-breaker is designed to be used in conjunction with the [PostCSS](https://github.com/postcss/postcss) loader and [stylelint](https://github.com/stylelint/stylelint).

## EXAMPLE USAGE

In the webpack.config.js file import style-warning-breaker (assuming you already have stylelint setup):

```
const styleWarningBreaker = require('style-warning-breaker');
```

and then tie it into postcss with stylelint (replace "stylelint" with whatever name you've imported it as):

```
postcss: function () {
  return [
    stylelint,
    styleWarningBreaker
  ];
}
```
## EXAMPLE OUTPUT

```
File: /demoProject/main.css
ERROR: Expected "margin" to come before "position" (declaration-block-properties-order)
ERROR: Expected "color" to come before "font-size" (declaration-block-properties-order)
ERROR: Expected "display" to come before "flex" (declaration-block-properties-order)
Breaking build due to CSS linting errors.
```
