import $ from 'qwery';

const dom = {
    first: (selector, root = null) => $(selector, root)[0],
    all: (selector, root = null) => $(selector, root),
    exists: (selector, root = null) => $(selector, root).length > 0
};

export default dom;
