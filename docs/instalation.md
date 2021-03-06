## DIRECT `<link>` INCLUDE
Simply [download](https://raw.githubusercontent.com/FelixLuciano/prim/master/dist/css/prim.min.css) and include with a `link` tag.

```html
<link rel="stylesheet" href="path/to/prim.min.css" type="text/css">
```


## CDN
For prototyping or learning purposes, you can use the latest version with:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prim-css/dist/prim.min.css" type="text/css">
```

For production, we recommend linking to a specific version number and build to avoid unexpected breakage from newer versions:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prim-css@1.3.0/dist/prim.min.css" type="text/css">
```

You can browse the source of the NPM package at [jsdelivr.com/package/npm/prim-css](https://www.jsdelivr.com/package/npm/prim-css/).

Prim is also available on [unpkg](https://unpkg.com/prim-css@1.3.0/dist/css/prim.min.css).


## Node module
It's the recommended installation method when building large scale applications with Prim. It pairs nicely with module bundlers such as [Webpack](https://webpack.js.org/) or [Browserify](http://browserify.org/). Prim also provides variables, functions and mixins to use with [SASS](https://sass-lang.com) that help in the development of responsive applications

### Via NPM
```shell
# Latest version
$ npm install prim-css --save-dev

# Especifc version
$ npm install prim-css@1.3.0 --save-dev
```

### Via Yarn
```shell
# Latest version
$ yarn add prim-css --dev

# Especifc version
$ yarn add prim-css@1.3.0 --dev
```
