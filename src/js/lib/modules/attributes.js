import $ from '../core';

$.prototype.setAttribute = function(name, value) {
  for (let i = 0; i < this.length; i++) {
    if (!name || !value) {
      return this;
    }
    this[i].setAttribute(name, value);
  }

  return this;
};

$.prototype.removeAttribute = function(name) {
  for (let i = 0; i < this.length; i++) {
    if (!name) {
      return this;
    }
    this[i].removeAttribute(name);
  }

  return this;
};

$.prototype.toggleAttribute = function(name) {
  for (let i = 0; i < this.length; i++) {
    if (!name) {
      return this;
    }
    this[i].toggleAttribute(name);
  }

  return this;
};