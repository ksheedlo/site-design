+function () {
  'use strict';

  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }

  function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike, 0);
  }

  toArray(document.querySelectorAll('pre')).forEach(function (el) {
    addClass(el, 'prettyprint');
  });

  prettyPrint();
}();
