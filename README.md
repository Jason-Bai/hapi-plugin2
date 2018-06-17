# hapi-plugin2

Plugin loader for [hapi](https://github.com/spumko/hapi), inspired by https://github.com/bsiddiqui/hapi-router.

## Hapi v17

`hapi-plugin2` requires Hapi v17.

## Install

```bash
// If you're using Hapi v17
$ npm i -S hapi-plugin2
```

## Usage

```js
try {
  await server.register({
    plugin: require('hapi-plugin2'),
    options: {
      plugins: 'src/**/*Plugin.js' // uses glob to include files
    }
  })
} catch (err) {
  // Handle err
  throw err
}
```

## Options

##### plugins

*Required* <br/>
Type: `string` / `array`

The [glob](https://github.com/Jason-Bai/hapi-plugin2#glob-primer) pattern you would like to include, file extension must special, default .js

##### ignore

Type: `string` / `array`

The pattern or an array of patterns to exclude

##### cwd

Type: `string`

The current working directory in which to search (defaults to `process.cwd()`)


## Specifying Plugins

Any files that match your plugins glob will be loaded

Example plugin file:
```js
module.exports = [
  'src/plugins/*Logger.js',
  'src/plugins/*OAuth.js',
]
```

## Glob Primer

Example globs:
```js
'plugins/*.js'    // match all js files in the plugins directory
'plugins/**/*.js' // recursively match all js files in the plugins directory
'**/*Plugin.js'   // match all js files that end with 'Plugin'
```

From [isaacs](https://github.com/isaacs/node-glob):

"Globs" are the patterns you type when you do stuff like `ls *.js` on
the command line, or put `build/*` in a `.gitignore` file.

The following characters have special magic meaning when used in a
path portion:

* `*` Matches 0 or more characters in a single path portion
* `?` Matches 1 character
* `[...]` Matches a range of characters, similar to a RegExp range.
If the first character of the range is `!` or `^` then it matches
any character not in the range.
* `!(pattern|pattern|pattern)` Matches anything that does not match
any of the patterns provided.
* `?(pattern|pattern|pattern)` Matches zero or one occurrence of the
patterns provided.
* `+(pattern|pattern|pattern)` Matches one or more occurrences of the
patterns provided.
* `*(a|b|c)` Matches zero or more occurrences of the patterns provided
* `@(pattern|pat*|pat?erN)` Matches exactly one of the patterns
provided
* `**` If a "globstar" is alone in a path portion, then it matches
zero or more directories and subdirectories searching for matches.
It does not crawl symlinked directories.
