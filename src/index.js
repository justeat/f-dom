import $ from 'qwery';

const dom = {
	/**
	* Returns first element in the DOM for the specified selector. 
	*
	* @param {string} selector
	* @param {string} root (optional) - if defined, search is performed relatively from this element
	*
	* @return {Element}
	*/
	first: (selector, root = null) => $(selector, root)[0],
	
	/**
	* Returns all elements in the DOM for the specified selector.
	*
	* @param {string} selector
	* @param {string} root (optional) - if defined, search is performed relatively from this element
	*
	* @return {Array.<Element>}
	*/
	all: (selector, root = null) => $(selector, root),
	
	/**
	* Returns true, if at least one element exists in the DOM, otherwise returns false. 
	*
	* @param {string} selector
	* @param {string} root (optional) - if defined, search is performed relatively from this element
	*
	* @return {boolean}
	*/
	exists: (selector, root = null) => $(selector, root).length > 0
};

export default dom;
