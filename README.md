<div align="center">
<h1>f-dom</h1>

<img width="125" alt="Fozzie Bear" src="bear.png" />

<p>Fozzie JS DOM queries library, built on top of <a href="https://www.npmjs.com/package/qwery">the qwery selector engine</a>.</p>
</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-dom.svg)](https://badge.fury.io/js/%40justeat%2Ff-dom)
[![Build Status](https://travis-ci.org/justeat/f-dom.svg)](https://travis-ci.org/justeat/f-dom)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-dom/badge.svg)](https://coveralls.io/github/justeat/f-dom)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-dom/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-dom?targetFile=package.json)


## Adding `f-dom` to your project

```bash
yarn add @justeat/f-dom
```

Then, inside your script import `f-dom`.

```js
import $ from '@justeat/f-dom';
```

## Usage

Each method has 2 parameters: mandatory `selector` and optional `root`.
If `root` parameter is not specified, search will be performed for all elements in the DOM, otherwise, search will be performed for `root` child elements.

`first` method returns first element in the DOM for the specified selector.

```js
const element = $.first('.btn');
...
const element = $.first('#btn', '.container');
```

`all` method returns all elements in the DOM for the specified selector.

```js
const element = $.all('.btn');
...
const element = $.all('.btn', '.container');
...
const element = $('.btn'); // short syntax
```

`exists` method returns true, if at least one element exists in the DOM, otherwise returns false.

```js
const exists = $.exists('.btn');
...
const exists = $.exists('.btn', '.container');
```
