import $ from 'qwery';

/**
* Returns first element in the DOM for the specified selector.
*
* @param {string} selector
* @param {string} root (optional) - if defined, search is performed relatively from this element
*
* @return {Element}
*/
const first = (selector, root = null) => $(selector, root)[0];

/**
* Returns all elements in the DOM for the specified selector.
*
* @param {string} selector
* @param {string} root (optional) - if defined, search is performed relatively from this element
*
* @return {Array.<Element>}
*/
const all = (selector, root = null) => $(selector, root);

/**
* Returns true, if at least one element exists in the DOM, otherwise returns false.
*
* @param {string} selector
* @param {string} root (optional) - if defined, search is performed relatively from this element
*
* @return {boolean}
*/
const exists = (selector, root = null) => $(selector, root).length > 0;

/**
* Returns all elements in the DOM for the specified selector. Short syntax of `all` method.
*
* @param {string} selector
* @param {string} root (optional) - if defined, search is performed relatively from this element
*
* @return {Array.<Element>}
*/
const dom = all;

dom.all = all;
dom.first = first;
dom.exists = exists;

export default dom;
