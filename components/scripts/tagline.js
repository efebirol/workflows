var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('TestBirol123 The most creative minds in Art');

fill;
