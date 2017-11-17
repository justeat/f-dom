# f-dom

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-dom.svg)](https://badge.fury.io/js/%40justeat%2Ff-dom)
[![Build Status](https://travis-ci.org/justeat/f-dom.svg)](https://travis-ci.org/justeat/f-dom)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-dom/badge.svg)](https://coveralls.io/github/justeat/f-dom)
[![Dependency Status](https://gemnasium.com/badges/github.com/justeat/f-dom.svg)](https://gemnasium.com/github.com/justeat/f-dom)


Fozzie JS DOM queries library, built on top of [qwery](https://www.npmjs.com/package/qwery) selector engine.

## Adding `f-dom` to your project

```bash
yarn add @justeat/f-dom
```

Then, inside your script import `f-dom`.

```js
import dom from '@justeat/f-dom';
```

## Usage

Each method has 2 parameters: mandatory `selector` and optional `root`. 
If `root` parameter is not specified, search will be performed for all elements in the DOM, otherwise, search will be performed for `root` child elements.

`first` method returns first element in the DOM for the specified selector (class or id).

```js
const element = dom.first('.btn');
...
const element = dom.first('#btn', '.container');
```

`all` method returns all elements in the DOM for the specified selector.

```js
const element = dom.all('.btn');
...
const element = dom.all('.btn', '.container');
```

`exists` method returns true, if at least one element exists in the DOM, otherwise returns false.

```js
const exists = dom.exists('.btn');
...
const exists = dom.exists('.btn', '.container');
```