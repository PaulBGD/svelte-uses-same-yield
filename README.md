# svelte uses same yield contents

If you look at main.html, you would think the only thing rendered is `Goodbye`. That's false, the only thing rendered is `Hello`. No matter what the value of `doIt` is in the data, it will always render the content of the first if block's component text.

This bug only occurs when there is a 2nd component with a yield in it and the 1st component has an if statement that uses the 2nd component in each block.

## Running

Supports NPM too.

```
yarn
yarn start
```
